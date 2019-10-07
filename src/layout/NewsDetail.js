import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchPostByID } from "../Store/Action/Post";
import Comments from "../page/Comments";
import RelatedNews from "../page/RelatedNews";

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false
    };
  }

  componentDidMount() {
    this.props.getPostByID(this.props.match.params.id);
  }

  _renderPost(data = []) {
    return data.map((post, index) => {
      return (
        <div key={index}>
          <div className="nd-header__title-text">{post.name}</div>
          <img
            className="edit-picture"
            src="../../assets/img/phong_detail.png"
          />
          <div className="nd-content__texts">
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section className="News-Detail-Page">
        {/* Button to Open the Modal */}
        <button
          className="btn btn-primary mt-3"
          data-toggle="modal"
          data-target="#newsDetailsModal"
        >
          Open modal
        </button>
        <div className="modal news-details__modal" id="newsDetailsModal">
          <div className="ndt-modal__container">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <button
                  type="button"
                  className="close close-button"
                  data-dismiss="modal"
                >
                  ×
                </button>
                <div className="clearfix" />
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <div className="modal-body__container container">
                  <div className="news-details__content-top">
                    <div className="news-details__header d-flex">
                      <div className="nd-header__logo">
                        <img
                          className="nd-header--logo"
                          src="../../assets/img/avatar-user.png"
                        />
                      </div>
                      <div className="nd-header__title">
                        <div className="header-title__container">
                          <a href="#" className="header-title-name">
                            Nam Anh
                          </a>
                          <div className="header-title__content">
                            [<span className="small-text">Chuyên gia</span>
                            <span className="content-1">
                              3,5+
                              <img
                                className="edit-star"
                                src="../../assets/img/SVG/star.svg"
                              />
                            </span>
                            ]
                          </div>
                          <span className="header-title--time-post">
                            3 ngày trước
                          </span>
                        </div>
                      </div>
                    </div>
                    {this._renderPost(this.props.post)}
                  </div>
                  <div className="info-fix">
                    <div className="name">Nam Anh</div>
                    <div className="post-time">03 ngày trước</div>
                    <a className="btn btn-follow" href="#">
                      Theo giõi
                    </a>
                    <div className="actions">
                      <div>
                        <a href="#" className="btn">
                          <span className="-ap  icon-like2 icon" /> 40
                        </a>
                      </div>
                      <div>
                        <a href="#" className="btn">
                          <span className="-ap  icon-share4 icon" /> 40
                        </a>
                      </div>
                      <div>
                        <a href="#" className="btn">
                          <span className="-ap  icon-bookmark_outline icon" />{" "}
                          40
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*--------- Content-bottom -------*/}
                  <div className="divider-gray" />
                  <Comments/>
                  <div className="divider-gray"></div>
                  <RelatedNews/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPostByID: postID => dispatch(FetchPostByID(postID))
});

const mapStateToProps = state => {
  return {
    post: state.post.postByID
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsDetail);
