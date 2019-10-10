import React, { Component } from "react";
import {connect} from "react-redux";
import { getPostByKeyword } from '../actions/post.action';
import Pagination from "../components/SearchResult/Pagination";
import ListItem from "../components/SearchResult/ListItem";

class AllResultPage extends Component {
  constructor(props) {
    super(props);
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems, page) {
    var urlParams = new URLSearchParams(window.location.search).get("keyword");
    this.props.getPostByKeywords(urlParams, page, 1);
  }

  _renderAllPost(data = []) {
    return data.map((post, index) => {
      return <ListItem key={index} post={post} />;
    });
  }

  render() {
    const {postPagination, countByKeyword} = this.props;
    return (
      <div className="result-pages__search-result text-center">
        <div className="rp-search-result__header">
          <div className="text-result">
            Khoảng <strong>{countByKeyword}</strong> kết quả
          </div>
          <div className="search-result__header-map">
            <div className="header-map__container">
              <div className="header-map__main">
                <div className="header-map--map">
                  <div className="header-map__map-group">
                    <img src="../../assets/img/result-map.jpg" alt />
                  </div>
                </div>
              </div>
              <div className="header-map__details">
                <div className="map-details--name">
                  <span>Lý Chính Thắng</span>
                </div>
                <div className="map-details--address">
                  <span>Quận 3, Tp Hồ Chí Minh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rp-search-result__items">
          {/* SEARCH RESULT ITEM*/}
          {postPagination.length > 0 && this._renderAllPost(postPagination)}
        </div>
        <div className="rp-search-result__pagination">
          <div className="search-result__pagination-container container">
            <div className="search-result__pagination-content d-flex align-items-center justify-content-center justify-content-sm-end">
              <div className="sr-pagination__items d-flex align-items-center">
                {postPagination && (
                  <Pagination
                    items={postPagination}
                    total={countByKeyword}
                    onChangePage={this.onChangePage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {         
    return {
        postPagination: state.postReducers.postPagination,
        countByKeyword: state.postReducers.countByKeyword
    }
}

const mapDispatchToProps = dispatch => ({
    getPostByKeywords: (keyword, page, limit) => dispatch(getPostByKeyword(keyword, page, limit)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllResultPage);
