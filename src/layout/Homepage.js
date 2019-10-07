import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { searchSuggestion, actGetSearchSuggestion } from '../Store/Action/Post';

class Homepage extends Component {
    _handleChange = (evt) => {
        if(evt.target.value){
            this.props.searchPostSuggestion(evt.target.value);
        } else{
            this.props.searchPostSuggestion("");
        }
    }

    _handleClick = (post) => {
        let obj = {
            searchResult: this.props.searchResult,
            keyword: post.title
        }              
        this.props.getSearchSuggestion(obj);
        this.props.history.push(`/index?keyword=${obj.keyword}`);
    }

    _handleEnter = (evt) => {
        if(evt.keyCode === 13) {
            let obj = {
                searchResult: this.props.searchResult,
                keyword: evt.target.value
            }
            this.props.getSearchSuggestion(obj);
            this.props.history.push(`/index?keyword=${obj.keyword}`);         
        }
    }

    componentDidMount() {
        this.props.searchPostSuggestion("");
    }

    render() {
        const styles = {
            listStyle: "none",
            a: {
                color: "black",
                cursor: "pointer"
            }
        }
        return (
            <div className="section-homepage">
                <div className="container-fluid homepage__container">
                    <div className="homepage__header layout-header d-none d-lg-block">
                        <div className="homepage__header-container layout-header__container">
                            <div className="homepage__header-top layout-header__top">
                                <div className="d-flex align-items-center hp-header-top__container lh-top__container">
                                    <div className="ml-auto hp-header-top__menu lh-top__menu">
                                        <div className="d-flex align-items-center ht-menu__items">
                                            <div className="ht-menu--item"><Link to="/index">Thông tin</Link></div>
                                            <div className="ht-menu--item"><a href="/ban-do">Bản đồ</a></div>
                                            <div className="ht-menu--item"><a href="/ket-qua/bang-gia">Bảng giá</a></div>
                                            <div className="ht-menu--item dropdown">
                                                <div className="dropdown-toggle" data-toggle="dropdown">Thêm</div>
                                                <div className="dropdown-menu ht-menu__add">
                                                    <div className="dropdown-item"><a href="#">Danh bạ</a></div>
                                                    <div className="dropdown-item"><a href="#">Tài nguyên</a></div>
                                                    <div className="dropdown-item"><a href="#">Hỏi đáp</a></div>
                                                </div>
                                            </div>
                                            <div className="ht-menu--item ht-menu--item__tools ht-menu-tools dropdown">
                                                <div className="menu-tools__btn-toggle dropdown-toggle" data-toggle="dropdown"><img className="ht-menu--icon" src="../../../assets/img/Group 1.png" alt="img" /></div>
                                                <div className="menu-tools__dropdown-menu dropdown-menu">
                                                    <div className="mt--dropdown-item dropdown-item"><a href="#"><img src="../../../assets/img/Group 1569.png" alt="img" /><span className="ht-menu--text">Tính toán khoản vay</span></a></div>
                                                    <div className="mt--dropdown-item dropdown-item"><a href="#"><img src="../../../assets/img/baseline-insert_chart-24px.png" alt="img" /><span className="ht-menu--text">
                                                        Tính
                          toán hiệu quả dự án</span></a></div>
                                                    <div className="mt--dropdown-item dropdown-item"><a href="#"><img src="../../../assets/img/baseline-monetization_on-24px.png" alt="img" /><span className="ht-menu--text">Tài chính cá nhân</span></a></div>
                                                </div>
                                            </div>
                                            <div className="ht-menu--item">
                                                <div className="ht__menu-notify"><a href="#"><img className="ht-menu--icon" src="../../assets/img/Group 22.png" alt="img" /></a></div>
                                            </div>
                                            <div className="ht-menu--item"><a className="ht-menu__login menu-tools--btn-login btn btn-primary" href="/dang-nhap">Đăng nhập</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-header_mobile d-lg-none">
                        <div className="header_mobile__container">
                            <div className="header_mobile__content d-flex justify-content-between">
                                <div className="menu_mobile__drawer">
                                    <div className="mobile-drawer__content d-flex align-items-center">
                                        <div className="drawer-toggler" data-toggle="modal" data-target="#drawerToggleExternalContent" aria-controls="drawerToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><img src="../../assets/img/icon-drawer.png" alt="img" /></div>
                                        <div className="modal fadeInRight" id="drawerToggleExternalContent" tabIndex={-1} role="dialog" aria-labelledby="drawerToggleExternalContent" aria-hidden="true">
                                            <div className="modal-content">
                                                <nav className="mobile-navbar">
                                                    <div className="mobile-navbar__content"><a className="navbar-brand" href="/"><img src="../../assets/img/asset-logo.png" alt="img" /></a>
                                                        <div className="navbar__items">
                                                            <div className="navbar--item"><a href="/ket-qua/thong-tin">Thông tin</a></div>
                                                            <div className="navbar--item"><a href="/ban-do">Bản đồ</a></div>
                                                            <div className="navbar--item"><a href="/ket-qua/bang-gia">Bảng giá</a></div>
                                                            <div className="navbar--item"><a href="#">Danh bạ</a></div>
                                                            <div className="navbar--item"><a href="#">Tài nguyên</a></div>
                                                            <div className="navbar--item"><a href="#">Hỏi đáp</a></div>
                                                        </div>
                                                    </div>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu_mobile__items d-flex align-items-center">
                                    <div className="menu_mobile--item dropdown dropdown__menu-tool">
                                        <div className="dropdown-toggle d-flex" data-toggle="dropdown"><img className="img_menu" src="../../assets/img/Group 1.png" alt="img" /></div>
                                        <div className="dropdown-menu menu-tool">
                                            <div className="dropdown-item"><a href="#"><img src="../../assets/img/Group 1569.png" alt="img" /><span className="menu-tool--text">
                                                Tính toán khoản
                      vay</span></a></div>
                                            <div className="dropdown-item"><a href="#"><img src="../../assets/img/baseline-insert_chart-24px.png" alt="img" /><span className="menu-tool--text">Tính toán hiệu quả dự án</span></a></div>
                                            <div className="dropdown-item"><a href="#"><img src="../../assets/img/baseline-monetization_on-24px.png" alt="img" /><span className="menu-tool--text">Tài chính cá nhân</span></a></div>
                                        </div>
                                    </div>
                                    <div className="menu_mobile--item">
                                        <div className="menu-notify"><a className="d-flex" href="#"><img className="img_menu" src="../../assets/img/Group 22.png" alt="img" /></a></div>
                                    </div>
                                    <div className="menu_mobile--item"><a className="btn-login" href="/dang-nhap"><img src="../../assets/img/icon-avatar.png" alt="img" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-body">
                        <div className="homepage-body__container">
                            <div className="homepage-body__content">
                                <div className="center d-flex justify-content-center align-items-center">
                                    <div className="center-content d-flex flex-column justify-content-center">
                                        <div className="homepage--logo">
                                            <div className="logo--container d-flex justify-content-center"><img src="../../assets/img/asset-logo.png" alt="img" /></div>
                                        </div>
                                        <div className="homepage--description">
                                            <div className="description--container d-flex flex-column align-items-center"><span className="description-line line-1">Thị trường bất động sản Việt Nam</span></div>
                                        </div>
                                        <div className="homepage--input-search">
                                            <div className="input-search__container d-flex justify-content-center">
                                                <div className="w-100 input-search__content collapsed" id="autoComplete__content">
                                                    <input className="form-control" id="autoComplete" type="text" placeholder="Search ..." tabIndex={1} onChange={this._handleChange} onKeyUp={this._handleEnter} />
                                                    {this.props.searchResult && (
                                                        <div>
                                                            <ul style={styles}>
                                                                {this.props.searchResult.map((post, index) => {
                                                                    return <li key={index}><a style={styles.a} onClick={() => this._handleClick(post)}>{post.title}</a></li>;
                                                                })}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage__footer layout-footer">
                        <div className="homepage__footer-container">
                            <div className="hp-footer__links layout-footer__links d-flex justify-content-center justify-content-lg-start">
                                <div className="hp-footer--link layout-footer--link"><a href="#">Giới thiệu</a></div>
                                <div className="hp-footer--link layout-footer--link"><a href="#">Hướng dẫn</a></div>
                            </div>
                            {/* Desktop Display*/}
                            <div className="hp-footer__quick-views layout-footer__quick-views d-none d-lg-flex">
                                <div className="hp-footer__quick-view layout-footer--quick-view w-50">
                                    <marquee>
                                        <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 1: </span> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                                    </marquee>
                                </div>
                                <div className="hp-footer__quick-view layout-footer--quick-view w-50">
                                    <marquee>
                                        <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 2: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean
                  sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                                    </marquee>
                                </div>
                            </div>
                            {/* Mobile Display*/}
                            <div className="hp-footer__quick-views layout-footer__quick-views d-flex d-lg-none">
                                <div className="hp-footer__quick-view layout-footer--quick-view">
                                    <marquee>
                                        <div className="quick-view__content d-inline-flex"><span><span className="quick-view--title">Tin nhanh 1: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean
                  sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                                        <div className="quick-view__content d-inline-flex"><span><span className="quick-view--title">Tin nhanh 2: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean
                  sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                                    </marquee>
                                </div>
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
        searchResult: state.post.searchResult
    }
}

const mapDispatchToProps = dispatch => ({
    searchPostSuggestion: keyword => dispatch(searchSuggestion(keyword)),
    getSearchSuggestion: (searchSuggestion) => dispatch(actGetSearchSuggestion(searchSuggestion))
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);