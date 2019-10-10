import React from 'react';

const defaultProps = {
    initialPage: 1,
    pageSize: 1
}

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pager: {}, total:0 };
    }

    componentWillMount() {
        // set page if items array isn't empty
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
        this.setState({
          total: this.props.total
        })
    }

    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.total !== prevProps.total) {
            this.setPage(this.props.initialPage);
        }
    }

    // shouldComponentUpdate() {
    //   if(this.props.page === Pagination.initialPage){
    //     return false;
    //   }
    // }

    setPage(page) {
        var { items, pageSize } = this.props;
        var pager = this.state.pager;
        
        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        pager = this.getPager(items.length, page, pageSize);
        // get new page of items from items array
        // var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        var pageOfItems = items;
        // update state
        this.setState({ pager: pager });
        // call change page function in parent component
        this.props.onChangePage(pageOfItems, page);
    }

    getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;
        totalItems = this.props.total;
        // default page size is 10
        pageSize = pageSize || 9;
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 9) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 4) {
                startPage = 1;
                endPage = 9;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 8;
                endPage = totalPages;
            } else {
                startPage = currentPage - 4;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        
        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        var pager = this.state.pager;
        if (!pager.pages || pager.pages.length <= 1) {
            return (
              <a className='sr-pagination--item is-actived' onClick={() => this.setPage(1)}>1</a>
            )
        }
        return (
            <>
              <a className={pager.currentPage === 1 ? 'sr-pagination--btn sr-pagination--previous disabled' : 'sr-pagination--btn sr-pagination--previous'} onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
              {pager.pages.map((page, index) =>
                <a key={index} className={pager.currentPage === page ? 'sr-pagination--item is-actived' : 'sr-pagination--item'} onClick={() => this.setPage(page)}>{page}</a>
              )}
              <a className={pager.currentPage === 1 ? 'sr-pagination--btn sr-pagination--next disabled' : 'sr-pagination--btn sr-pagination--next'} onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
            </>
        );
    }
}

Pagination.defaultProps = defaultProps;
export default Pagination;