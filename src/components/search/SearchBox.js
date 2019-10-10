import React, { Component } from "react";
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom'
import { searchSuggestion, actGetSearchSuggestion, getPostByKeyword, fetchCountByKeyword } from '../../actions/post.action';

class SearchBox extends Component {
      constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            redirectPath: ''
        };
    }
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
        this.props.getPostByKeywords(post.title, 1, 1);
        this.props.getCountByKeyword(post.title);
        this.setState({
          isRedirect: true,
          redirectPath: `/result?keyword=${obj.keyword}`
        })
    }

    _handleEnter = (evt) => {
        if(evt.keyCode === 13) {
            let obj = {
                searchResult: this.props.searchResult,
                keyword: evt.target.value
            }
            this.props.getSearchSuggestion(obj);
            this.props.getPostByKeywords(evt.target.value, 1, 1);
            this.props.getCountByKeyword(evt.target.value);
            this.setState({
              isRedirect: true,
              redirectPath: `/result?keyword=${obj.keyword}`
            })
        }
    }

  render() {
    return (
      <>
        {this.state.isRedirect && <Redirect to={this.state.redirectPath} />}
        <div
          className="w-100 input-search__content collapsed"
          id="autoComplete__content"
        >
          <input
            className="form-control"
            id="autoComplete"
            type="text"
            placeholder="Search ..."
            tabIndex={1}
            onChange={this._handleChange}
            onKeyUp={this._handleEnter}
          />
          {this.props.searchResult && (
            <div>
              <ul >
                {this.props.searchResult.map((post, index) => {
                  return (
                    <li key={index}>
                      <a
                        onClick={() => this._handleClick(post)}
                      >
                        {post.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {         
  return {
      searchResult: state.postReducers.searchResult,
      postSuggestion: state.postReducers.searchSuggestion,
      countByKeyword: state.postReducers.countByKeyword
  }
}

const mapDispatchToProps = dispatch => ({
    searchPostSuggestion: keyword => dispatch(searchSuggestion(keyword)),
    getPostByKeywords: (keyword, page, limit) => dispatch(getPostByKeyword(keyword, page, limit)),
    getCountByKeyword: (keyword) => dispatch(fetchCountByKeyword(keyword)),
    getSearchSuggestion: (searchSuggestion) => dispatch(actGetSearchSuggestion(searchSuggestion))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
