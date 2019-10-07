import React, { Component } from 'react';
import SearchResultItem from "../page/SearchResultItem";
import {connect} from "react-redux";
import { actGetSearchSuggestion, searchSuggestion, getPostByKeyword, fetchCountByKeyword } from '../Store/Action/Post';
import Pagination from "../components/Pagination";
class Index extends Component {
    constructor (props) {
        super (props);
        this.state = {
            keyword: "",
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems, page) {
        var urlParams = new URLSearchParams(window.location.search).get("keyword");
        this.props.getPostByKeywords(urlParams, page, 1);
    }

    _renderAllPost(data = []) {
        return data.map((post, index) => {
            return (
                <SearchResultItem key={index} post={post}/>
            )
        })
    }

    _handleEnter = (evt) => {
        if(evt.keyCode === 13) {
            // this.props.searchPostSuggestion(evt.target.value);
            this.props.getPostByKeywords(evt.target.value, 1, 1);
            this.props.getCountByKeyword(evt.target.value);
            this.props.history.push(`/index?keyword=${evt.target.value}`);
        }
    }
    
    componentDidMount() {
        var urlParams = new URLSearchParams(window.location.search).get("keyword");
        this.setState({
            keyword: urlParams
        })
        // this.props.searchPostSuggestion(this.urlParams);
        this.props.getPostByKeywords(urlParams, 1, 1);
        this.props.getCountByKeyword(urlParams);
    }

    render() {
        const {postPagination, countByKeyword} = this.props;
        return (
            <section className="section__result-pages">
                <div className="container-fluid result-pages__container">
                    <div className="result-pages__header layout-header">
                        <div className="result-pages__header-container layout-header__container">
                            <div className="result-pages__header-top layout-header__top">
                                <div className="d-flex align-items-center rp-header-top__container lh-top__container">
                                    <div className="rp-header-top__logo lh-top__logo">
                                        <div className="header-top--logo lh-top--logo"><a href="/"><img src="../../../assets/img/icon-asset.png" alt="icon" /></a></div>
                                    </div>
                                    <div className="rp-header-top__search-input lh-top__search-input">
                                        <div className="search-input">
                                            <div className="w-100 input-search__content collapsed" id="autoComplete__content">
                                                <input className="form-control" id="autoComplete" type="text" placeholder="Search ..." tabIndex={1} defaultValue={this.state.keyword} onKeyUp={this._handleEnter}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-auto rp-header-top__menu lh-top__menu">
                                        <div className="d-flex align-items-center ht-menu__items">
                                            <div className="ht-menu--item ht-menu--item__tools ht-menu-tools dropdown">
                                                <div className="menu-tools__btn-toggle dropdown-toggle" data-toggle="dropdown"><img className="ht-menu--icon" src="../../../assets/img/Group 1.png" alt="group1" /></div>
                                                <div className="menu-tools__dropdown-menu dropdown-menu">
                                                    <div className="mt--dropdown-item dropdown-item"><a href="/"><img src="../../../assets/img/Group 1569.png" alt="img" /><span className="ht-menu--text">
                                                        Tính
                                                        toán
                                                        khoản
                          vay</span></a></div>
                                                    <div className="mt--dropdown-item dropdown-item"><a href="/"><img src="../../../assets/img/baseline-insert_chart-24px.png" alt="image1" /><span className="ht-menu--text">
                                                        Tính
                          toán hiệu quả dự án</span></a></div>
                                                    <div className="mt--dropdown-item dropdown-item"><a href="/"><img src="../../../assets/img/baseline-monetization_on-24px.png" alt="image2" /><span className="ht-menu--text">Tài chính cá nhân</span></a></div>
                                                </div>
                                            </div>
                                            <div className="ht-menu--item">
                                                <div className="ht-menu__notify"><a href="/"><img className="ht-menu--icon" src="../../assets/img/Group 22.png" alt="image3" /></a></div>
                                            </div>
                                            <div className="ht-menu--item"><a className="ht-menu__login menu-tools--btn-login" href="/dang-nhap"><img className="ht-menu--icon ht-menu--icon-avatar" src="../../assets/img/icon-avatar.png" alt="image5" /></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="result-pages__header-navigation">
                                <div className="rp-header-navigation header-navigation__container">
                                    <div className="header-navigation__items d-flex">
                                        <div className="header-navigation--item is-actived"><a className="hn-item--text" href="/ket-qua">Tất cả</a></div>
                                        <div className="header-navigation--item"><a className="hn-item--text" href="/ket-qua/thong-tin">Thông tin</a></div>
                                        <div className="header-navigation--item"><a className="hn-item--text" href="/ban-do">Bản đồ</a></div>
                                        <div className="header-navigation--item"><a className="hn-item--text" href="/ket-qua/bang-gia">Bảng giá</a></div>
                                        <div className="header-navigation--item dropdown">
                                            <div className="hn-item--text dropdown-toggle" data-toggle="dropdown">Thêm <span className="fa icon" /></div>
                                            <div className="dropdown-menu hn-menu__add">
                                                <div className="dropdown-item"><a href="/">Danh bạ</a></div>
                                                <div className="dropdown-item"><a href="/">Tài nguyên</a></div>
                                                <div className="dropdown-item"><a href="/">Hỏi đáp</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="result-pages__body">
                        <div className="result-pages__body-container container">
                            <div className="result-pages__search-result">
                                <div className="rp-search-result__header">
                                    <div className="text-result">Khoảng <strong>
                                    {countByKeyword && (
                                        countByKeyword
                                    )}
                                    </strong> kết quả</div>
                                    <div className="search-result__header-map">
                                        <div className="header-map__container">
                                            <div className="header-map__main">
                                                <div className="header-map--map">
                                                    <div className="header-map__map-group"><img src="../../assets/img/result-map.jpg" alt /></div>
                                                </div>
                                            </div>
                                            <div className="header-map__details">
                                                <div className="map-details--name"><span>Lý Chính Thắng</span></div>
                                                <div className="map-details--address"><span>Quận 3, Tp Hồ Chí Minh</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rp-search-result__items">
                                    {/* SEARCH RESULT ITEM*/}
                                   {postPagination.length > 0 && (
                                        this._renderAllPost(postPagination)
                                   )}
                                </div>                                                                  
                                <div className="rp-search-result__pagination">
                                    <div className="search-result__pagination-container container">
                                        <div className="search-result__pagination-content d-flex align-items-center justify-content-center justify-content-sm-end">
                                            <div className="sr-pagination__items d-flex align-items-center">
                                                {postPagination && (
                                                    // console.log(postPagination)
                                                    <Pagination items={postPagination} total={countByKeyword} onChangePage={this.onChangePage} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="result-pages__footer layout-footer">
                        <div className="result-pages__footer-container">
                            <div className="rs-footer__links layout-footer__links d-flex justify-content-center justify-content-lg-start">
                                <div className="rs-footer--link layout-footer--link"><a href="/">Giới thiệu</a></div>
                                <div className="rs-footer--link layout-footer--link"><a href="/">Hướng dẫn</a></div>
                            </div>
                            {/* Desktop*/}
                            <div className="rs-footer__quick-views layout-footer__quick-views d-none d-lg-flex">
                                <div className="rs-footer__quick-view layout-footer--quick-view w-50">
                                    <marquee>
                                        <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 1: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean
                  sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                                    </marquee>
                                </div>
                                <div className="rs-footer__quick-view layout-footer--quick-view w-50">
                                    <marquee>
                                        <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 2: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean
                  sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                                    </marquee>
                                </div>
                            </div>
                            {/* Mobile*/}
                            <div className="rs-footer__quick-views layout-footer__quick-views d-flex d-lg-none">
                                <div className="rs-footer__quick-view layout-footer--quick-view">
                                    <marquee>
                                        <div className="quick-view__content d-inline-flex"><span><span className="quick-view--title">Tin nhanh 1: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean
                  sollicitudin, lorem quis biben <a href="/">Xem nhanh</a></span></div>
                                        <div className="quick-view__content d-inline-flex"><span><span className="quick-view--title">Tin nhanh 2: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean
                  sollicitudin, lorem quis biben <a href="/">Xem nhanh</a></span></div>
                                    </marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CHAT SIDEBAR*/}
                <div className="d-none d-lg-block chat-sidebar collapsed" id="chat-sidebar">
                    <div className="chat-sidebar__container">
                        <div className="chat-sidebar__content d-flex flex-column justify-content-between">
                            {/* Chat Sidebar Top*/}
                            <div className="chat-sidebar__top">
                                <div className="chat-sidebar--btn-collapse">
                                    <div className="btn-expand__content">
                                        <button className="btn btn-chat--expand" id="btn-chat--expand"><img src="../../assets/img/Path 115.png" alt="img" /></button>
                                    </div>
                                </div>
                            </div>
                            {/* Chat Sidebar Bottom*/}
                            <div className="chat-sidebar__bottom">
                                {/* Chat list*/}
                                <div className="chat-sidebar__list chat-list">
                                    <div className="chat-list__container">
                                        <div className="chat-list__content">
                                            <div className="chat-list__contact">
                                                <div className="chat-list--contact-items">
                                                    {/* Contact items*/}
                                                    <div className="contact-items contact-items__active">
                                                        {/* Contact item*/}
                                                        <div className="contact-item d-flex justify-content-center">
                                                            <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-1.png" alt="img" /></div>
                                                            <div className="contact-item--name">Lê Ánh Hồng Nga</div>
                                                            <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="img" /></div>
                                                        </div>
                                                        {/* Contact item*/}
                                                        <div className="contact-item d-flex justify-content-center">
                                                            <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-2.png" alt="img" /></div>
                                                            <div className="contact-item--name">Peter Parker</div>
                                                            <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="img" /></div>
                                                        </div>
                                                        {/* Contact item*/}
                                                        <div className="contact-item d-flex justify-content-center">
                                                            <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-3.png" alt="img" /></div>
                                                            <div className="contact-item--name">Tom Hank</div>
                                                            <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="img" /></div>
                                                        </div>
                                                        {/* Contact item*/}
                                                        <div className="contact-item d-flex justify-content-center">
                                                            <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-4.png" alt="img" /></div>
                                                            <div className="contact-item--name">Amy Lee Johnson</div>
                                                            <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="img" /></div>
                                                        </div>
                                                        {/* Contact item*/}
                                                        <div className="contact-item d-flex justify-content-center">
                                                            <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-5.png" alt="img" /></div>
                                                            <div className="contact-item--name">Picasa Poo</div>
                                                            <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="img" /></div>
                                                        </div>
                                                    </div>
                                                    {/* Contact items*/}
                                                    <div className="contact-items contact-items__inactive">
                                                        {/* Contact item*/}
                                                        <div className="contact-item d-flex justify-content-center">
                                                            <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-6.png" alt="img" /></div>
                                                            <div className="contact-item--name">Jessica Snow</div>
                                                            <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="img" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Chat message*/}
                                <div className="chat-sidebar__chat-message">
                                    <div className="chat-message__container">
                                        <div className="chat-message__content">
                                            <div className="chat-message d-flex justify-content-center align-items-center">
                                                <div className="chat-message--icon"><img src="../../assets/img/chat-message.png" alt="img" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Chat Search*/}
                                <div className="chat-sidebar__search-input">
                                    <div className="search-input">
                                        <div className="search-input__container">
                                            <div className="search-input__content">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="search-icon"><img src="../../assets/img/SVG/search.svg" alt="img" /></div>
                                                    </div>
                                                    <input className="form-control" type="text" placeholder="Tìm kiếm bạn bè" aria-label="Username" aria-describedby="basic-addon1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Chat pop-up*/}
                                <div id="chat-sidebar__pop-up">
                                    <div className="chat-popup">
                                        <div className="chat-popup__container">
                                            <div className="chat-popup__content">
                                                <div className="chat-popup__items" id="chat-popup__items">
                                                    <div className="chat-popup--item">
                                                        <div className="chat-popup--header d-flex">
                                                            <div className="chat-popup--status"><img src="../../assets/img/icon-chat-active.png" alt /></div><span className="ml-2 header--text">Test</span>
                                                            <div className="chat-popup--close">×</div>
                                                        </div>
                                                        <div className="chat-popup--body">
                                                            <div className="message-received">
                                                                <div className="message-received__content row">
                                                                    <div className="col-2 px-0 received__content--icon"><img src="../../assets/img/chat-avt-1.png" alt /></div>
                                                                    <div className="col-10 received__content--text"><span>
                                                                        KHLCNT của Ban Quản lý dự án đầu tư xây .... KHLCNT của Sở Tài chính tỉnh Hưng Yên
                                                                        cho dự
                                                                        án “Mua sắm thiết bị định .... Hạng mục: Xóm Ao Vàng, Cổ Rùa, Gò Chè, Phúc Lộc, Quyết
                                Thắng, Tân ...</span></div>
                                                                    <div className="col-12 received__content--time text-right"><span>12:09 - 18/10/2019</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="message-send">
                                                                <div className="message-send__content row align-items-end flex-column">
                                                                    <div className="message-send--text"><span>OK</span></div>
                                                                    <div className="message-send--time text-right"><span>1 min</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat-popup--input">
                                                            <div className="input-group">
                                                                <input className="form-control" type="text" placeholder="Nhập tin nhắn" aria-label="Username" aria-describedby="basic-addon1" />
                                                                <div className="input-group-append">
                                                                    <div className="send-icon"><img src="../../assets/img/icon-send.png" alt="img" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

const mapStateToProps = state => {         
    return {
        searchResult: state.post.searchResult,
        posts: state.post.allPost,
        postSuggestion: state.post.searchSuggestion,
        postPagination: state.post.postPagination,
        countByKeyword: state.post.countByKeyword
    }
}

const mapDispatchToProps = dispatch => ({
    searchPostSuggestion: keyword => dispatch(searchSuggestion(keyword)),
    // getSearchSuggestion: (searchSuggestion) => dispatch(actGetSearchSuggestion(searchSuggestion)),
    getPostByKeywords: (keyword, page, limit) => dispatch(getPostByKeyword(keyword, page, limit)),
    getCountByKeyword: (keyword) => dispatch(fetchCountByKeyword(keyword))
})


export default connect(mapStateToProps, mapDispatchToProps)(Index);