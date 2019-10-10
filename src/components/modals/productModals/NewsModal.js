import React, { Component } from "react";
import ScrollTop from "../ScrollComponent/ScrollTop";
import ReactHtmlParser from "react-html-parser";
import NewsCategorySequence from "../productModals/NewsCategorySequence";
import "../../../assets/stylesheets/index.css";
import "../../../assets/stylesheets/pages/_new-detail-popup.css";
import style from '../../../assets/module/_modal_display.module.css';
class NewsModal extends Component {

  handleOnCloseClick = () => {
    this.props.handleOnCloseClick();    
  };
  
  componentWillMount() {
    this.closeModal();
    document.body.style.overflowY = "hidden";
  }

  closeModal() {
    document.addEventListener('keydown', (e) => {            
      if(e.key === "Escape"){   
        this.handleOnCloseClick();
      }
    })
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.closeModal());
    document.body.style.overflowY = "auto";
  }
  

  render() {
    var post = this.props.currentPost || []; 

    return (
      <div className={`modal-open ${style.outsite__container}`}>
      <div onClick={this.handleOnCloseClick} />
      <ScrollTop />
      <div
        className="modal news-details__modal show"       
        data-keyboard="false"
        id="newsDetailsModal"        
        style={{ display: "block" }}
      >
        <div className="ndt-modal__container">
          <div className="modal-content">
            {/* Modal Header */}
            <div className={`modal-header ${style.modal__header}`}>
              <button
                type="button"
                onClick={this.handleOnCloseClick}
                className="close close-button"
                data-dismiss="modal"
              >
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <div className="modal-body__container container">
                {post[0] && (
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
                  <div className="nd-header__title-text">
                    {post[0].name}
                  </div>
                  {post[0].description}
                  <hr />
                  {ReactHtmlParser(post[0].content)}
                </div>
                )}
                
                {/*--------- Content-bottom -------*/}
                <div className="news-details__content-bottom">
                  <div className="nd-content__comment">
                    <div className="nd-content__comment-items">
                      <p>Bình luận</p>
                      {/* Comment item */}
                      <div className="content-comment__item d-flex">
                        <div className="cc-item--avatar">
                          <img
                            className="cc-item--avatar-img"
                            src="../../assets/img/chat-avt-4.png"
                          />
                        </div>
                        <div className="cc-item__details">
                          <div className="cc-item__title d-flex justify-content-between">
                            <span className="content-1">
                              {" "}
                              Lâm Thy Văn Tần{" "}
                            </span>
                            <span className="text-top">
                              {" "}
                              12:09 - 18/10/2019
                            </span>
                          </div>
                          <div className="cc-item__details-text">
                            Đầu tư an toàn, bảo toàn dòng vốn. Cam kết lợi
                            nhuận 10%/năm. Hỗ trợ lãi suất 0%/tháng. Bảo đảm
                            chất lượng với đơn vị vận hành quốc tế. Giá trị
                            bất động sản tăng theo hàng năm. Cho vay lên tới
                            65% Cơ hội du lịch miễn phí. Vốn đầu tư từ 600
                            triệu. Tặng 15 đêm nghỉ dưỡng.
                          </div>
                          <div className="icon-comment-like-share">
                            <span>Trả lời</span>
                            <img
                              src="../../assets/img/ic_chat_bubble_outline_black_24px.png"
                              alt=""
                            />
                            <span>0</span>
                            <img
                              src="../../assets/img/ic_like_black_24px.png"
                              alt=""
                            />
                            <span>687</span>
                            <img
                              src="../../assets/img/ic_share_black_24px.png"
                              alt=""
                            />
                            <span>10</span>
                          </div>
                        </div>
                      </div>
                      {/* Commen Item */}
                      <div className="content-comment__item d-flex">
                        <div className="cc-item--avatar">
                          <img
                            className="cc-item--avatar-img"
                            src="../../assets/img/chat-avt-6.png"
                          />
                        </div>
                        <div className="cc-item__details">
                          <div className="cc-item__title d-flex justify-content-between">
                            <span className="content-1">
                              Nguyễn Thị Tường Anh
                            </span>
                            <span className="text-top">
                              {" "}
                              12:09 - 18/10/2019
                            </span>
                          </div>
                          <div className="cc-item__details-text">
                            Đầu tư an toàn, bảo toàn dòng vốn. Cam kết lợi
                            nhuận 10%/năm. Hỗ trợ lãi suất 0%/tháng. Bảo đảm
                            chất lượng với đơn vị vận hành quốc tế. Giá trị
                            bất động sản tăng theo hàng năm. Cho vay lên tới
                            65% Cơ hội du lịch miễn phí. Vốn đầu tư từ 600
                            triệu. Tặng 15 đêm nghỉ dưỡng.
                          </div>
                          <div className="icon-comment-like-share">
                            <span>Trả lời</span>
                            <img
                              src="../../assets/img/ic_chat_bubble_outline_black_24px.png"
                              alt=""
                            />
                            <span>0</span>
                            <img
                              src="../../assets/img/ic_like_black_24px.png"
                              alt=""
                            />
                            <span>687</span>
                            <img
                              src="../../assets/img/ic_share_black_24px.png"
                              alt=""
                            />
                            <span>10</span>
                          </div>
                        </div>
                      </div>
                      {/* Commen Item Input */}
                      <div className="content-comment__input content-comment__item d-flex">
                        <div className="cc-item--avatar">
                          <img
                            className="cc-item--avatar-img"
                            src="../../assets/img/chat-avt-6.png"
                          />
                        </div>
                        <div className="cc-item__details d-flex align-items-center">
                          <input
                            type="text"
                            placeholder="Viết bình luận của bạn ..."
                            className="form-control w-100"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="nd-content__related">
                      <div className="content-related__title">
                        <span>Các bài viết liên quan</span>
                      </div>
                      <NewsCategorySequence />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default NewsModal;
