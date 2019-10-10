import * as actionType from "../constants/actionType";

let initialState = {
    allPost: [],
    postByID: [],
    searchResult: [],
    searchSuggestion: {},
    postPagination: [],
    countByKeyword: 0
}

export const postReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionType.POST_GET_ALL_POST: {            
            return {...state, allPost: action.payload}
        }
        case actionType.POST_GET_BY_ID: {
            return {...state, postByID: action.payload}            
        }
        case actionType.SEARCH_SUGGESTION: {
            return {...state, searchResult: action.payload}
        }
        case actionType.SEARCH_GET_SUGGESTION: {
            return {...state, searchSuggestion: action.payload}
        }
        case actionType.SEARCH_POST_BY_KEYWORD: {
            return {...state, postPagination: action.payload}
        }
        case actionType.SEARCH_COUNT_BY_KEYWORD: {
            return {...state, countByKeyword: action.payload}
        }
        default:
            return {...state};
    }
}