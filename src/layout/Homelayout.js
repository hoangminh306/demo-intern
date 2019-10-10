import React, { Component } from 'react';
import HomeMobileNav from '../components/Nav/HomeMobileNav';
import HomeFooterNav from '../components/Nav/HomeFooterNav';
import HomeNav from '../components/Nav/HomeNav';
class Homelayout extends Component {
    render() {
        return (
            <div className="section-homepage">
                <div className="container-fluid homepage__container">
                    <HomeNav />
                    <HomeMobileNav />
                    {this.props.children}
                    <HomeFooterNav />
                </div>
            </div>
        );
    }
}

export default Homelayout;