import Axios from "axios"

class Post {
    // fetchPostByIDFromDB (postID) {
    //     return restConnector({
    //         url: `/post/get_by_id/postID=${postID}`,
    //         method: "GET"
    //     })
    // }

    // fetchAllPostFromDB () {
    //     return restConnector({
    //         url: `/post/get_list`,
    //         method: "GET"
    //     })
    // }

    fetchPostByIDFromDB (postID) {
        return Axios.get(`http://27.74.250.96:8384/api/v1/post/get_by_id?postID=${postID}`)
    }

    fetchAllPostFromDB () {
        return Axios.get(`http://27.74.250.96:8384/api/v1/post/get_list`)
    }

    searchSuggestionFromDB (keyword) {
        return Axios.get(`http://27.74.250.96:8384/api/v1/search/suggestion?keyword=${keyword}`)
    }

    getPostByKeywordFromDB (keyword, page, limit) {
        return Axios.get(`http://27.74.250.96:8384/api/v1/search/get_post_by_keyword?keyword=${keyword}&page=${page}&limit=${limit}`)
    }

    fetchCountByKeyword (keyword) {
        return Axios.get(`http://27.74.250.96:8384/api/v1/search/count_by_keyword?keyword=${keyword}`)
    }
}

export default new Post();