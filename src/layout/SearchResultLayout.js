import React, { Component } from 'react';
import {connect} from "react-redux";
import { getPostByKeyword, fetchCountByKeyword } from '../actions/post.action';
import { Redirect } from "react-router-dom";
import ChatSideBar from '../components/ChatSideBar';

class SearchResultLayout extends Component {
    constructor (props) {
        super (props);
        this.state = {
            keyword: "",
            isRedirect: false,
            redirectPath: ''
        }
    }

    componentWillMount() {
        var urlParams = new URLSearchParams(window.location.search).get("keyword");
        this.setState({
            keyword: urlParams
        })
        this.props.getPostByKeywords(urlParams, 1, 1);
        this.props.getCountByKeyword(urlParams);
    }

    _handleEnter = (evt) => {
        if(evt.keyCode === 13) {
            this.props.getPostByKeywords(evt.target.value, 1, 1);
            this.props.getCountByKeyword(evt.target.value);
            this.setState({
                isRedirect: true,
                redirectPath: `/result?keyword=${evt.target.value}`
              })
        }
    }

    render() {
        return (
            <>
            {this.state.isRedirect && <Redirect to={this.state.redirectPath} />}
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
                                            {/* <SearchBox/> */}
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
                                    
                                    {this.props.children}
                                            
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
                {/* <ChatSideBar/> */}
            </section>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getPostByKeywords: (keyword, page, limit) => dispatch(getPostByKeyword(keyword, page, limit)),
    getCountByKeyword: (keyword) => dispatch(fetchCountByKeyword(keyword))
})

export default connect(undefined, mapDispatchToProps)(SearchResultLayout);