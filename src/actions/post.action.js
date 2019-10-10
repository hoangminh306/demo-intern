import * as actionType from "../constants/actionType";
import callAPI from "../utils/callAPI.util";

export const FetchAllPost = () => {
    return (dispatch) => {
        return callAPI("post/get_list").then(response => {
            dispatch(actFetchAllPost(response.data))
        })         
    }
}

export const actFetchAllPost = (data) => {
    return {
        type: actionType.POST_GET_ALL_POST,
        payload: data
    }
}

export const FetchPostByID = (postID) => {
    return (dispatch) => {
        return callAPI(`post/get_by_id?postID=${postID}`)
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
        type: actionType.POST_GET_BY_ID,
        payload: data
    }
}

export const searchSuggestion = (keyword) => {
    return (dispatch) => {
        return callAPI(`search/suggestion?keyword=${keyword}`)
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
        type: actionType.SEARCH_SUGGESTION,
        payload: data
    }
}

export const actGetSearchSuggestion = (postSuggestion) => {
    return {
        type: actionType.SEARCH_GET_SUGGESTION,
        payload: postSuggestion
    }
}

export const getPostByKeyword = (keyword, page, limit) => {
    return (dispatch) => {
        return callAPI(`search/get_post_by_keyword?keyword=${keyword}&page=${page}&limit=${limit}`)
            .then(result => {
                dispatch(actGetPostByKeyword(result.data));
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const actGetPostByKeyword = data => {
    return {
        type: actionType.SEARCH_POST_BY_KEYWORD,
        payload: data
    }
}

export const fetchCountByKeyword = keyword => {
    return dispatch => {
        return callAPI(`search/count_by_keyword?keyword=${keyword}`)
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
        type: actionType.SEARCH_COUNT_BY_KEYWORD,
        payload: data
    }
}