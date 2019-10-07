import { FETCH_ALL_POST, FETCH_POST_BY_ID, SEARCH_SUGGESTION, GET_SEARCH_SUGGESTION, GET_POST_BY_KEYWORD, FETCH_COUNT_BY_KEYWORD } from "../Action/Type";

let initialState = {
    allPost: [],
    postByID: [],
    searchResult: [],
    searchSuggestion: {},
    postPagination: [],
    countByKeyword: 0
}

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_POST: {            
            return {...state, allPost: action.payload}
        }
        case FETCH_POST_BY_ID: {
            return {...state, postByID: action.payload}            
        }
        case SEARCH_SUGGESTION: {
            return {...state, searchResult: action.payload}
        }
        case GET_SEARCH_SUGGESTION: {
            return {...state, searchSuggestion: action.payload}
        }
        case GET_POST_BY_KEYWORD: {
            return {...state, postPagination: action.payload}
        }
        case FETCH_COUNT_BY_KEYWORD: {
            return {...state, countByKeyword: action.payload}
        }
        default:
            return {...state};
    }
}

export default PostReducer;