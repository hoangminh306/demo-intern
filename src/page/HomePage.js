import React, { Component } from "react";
import Homelayout from "../layout/Homelayout";
import SearchBox from '../components/search/SearchBox';

class HomePage extends Component {
  render() {
    return (
      <Homelayout>
        <div className="homepage-body">
          <div className="homepage-body__container">
            <div className="homepage-body__content">
              <div className="center d-flex justify-content-center align-items-center">
                <div className="center-content d-flex flex-column justify-content-center">
                  <div className="homepage--logo">
                    <div className="logo--container d-flex justify-content-center">
                      <img src="../../assets/img/asset-logo.png" alt="img" />
                    </div>
                  </div>
                  <div className="homepage--description">
                    <div className="description--container d-flex flex-column align-items-center">
                      <span className="description-line line-1">
                        Thị trường bất động sản Việt Nam
                      </span>
                    </div>
                  </div>
                  <div className="homepage--input-search">
                    <div className="input-search__container d-flex justify-content-center">
                        <SearchBox/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Homelayout>
    );
  }
}

export default HomePage;
