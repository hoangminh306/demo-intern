import { FETCH_ALL_POST, FETCH_POST_BY_ID, SEARCH_SUGGESTION, GET_SEARCH_SUGGESTION, GET_POST_BY_KEYWORD, FETCH_COUNT_BY_KEYWORD } from "./Type";
import post from "../../utils/Post";

export const FetchAllPost = () => {
    return (dispatch) => {
        post.fetchAllPostFromDB()
        .then(res => {
            dispatch(actFetchAllPost(res.data));
        })
        .catch(err => {
            console.log(err);
        })            
    }
}

export const actFetchAllPost = (data) => {
    return {
        type: FETCH_ALL_POST,
        payload: data
    }
}

export const FetchPostByID = (postID) => {
    return (dispatch) => {
        post.fetchPostByIDFromDB(postID)
        .then(res => {
            dispatch(actFetchPostByID(res.data))
        })
        .catch(err => {
            console.log(err);    
        })
    } 
}

export const actFetchPostByID = (data) => {
    return {
        type: FETCH_POST_BY_ID,
        payload: data
    }
}

export const searchSuggestion = (keyword) => {
    return (dispatch) => {
        post.searchSuggestionFromDB(keyword)
        .then(res => {
            dispatch(actSearchSuggestion(res.data));
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const actSearchSuggestion = (data) => {
    return {
        type: SEARCH_SUGGESTION,
        payload: data
    }
}

export const actGetSearchSuggestion = (postSuggestion) => {
    return {
        type: GET_SEARCH_SUGGESTION,
        payload: postSuggestion
    }
}

export const getPostByKeyword = (keyword, page, limit) => {
    return (dispatch) => {
        post.getPostByKeywordFromDB(keyword, page, limit)
        .then(res => {
            dispatch(actGetPostByKeyword(res.data));
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const actGetPostByKeyword = data => {
    return {
        type: GET_POST_BY_KEYWORD,
        payload: data
    }
}

export const fetchCountByKeyword = keyword => {
    return dispatch => {
        post.fetchCountByKeyword(keyword)
        .then(res => {
            dispatch(actFetchCountByKeyword(res.data));
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const actFetchCountByKeyword = data => {
    return {
        type: FETCH_COUNT_BY_KEYWORD,
        payload: data
    }
}