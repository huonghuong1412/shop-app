import * as types from '../constants'

const initialState = {
    blogs: [],
    blogItem: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.GET_ALL_BLOG:
            return {
                ...state,
                blogs: action.blogs
            }
        case types.GET_BLOG_DETAIL:
            return {
                ...state,
                blogItem: action.blog
            }
        case types.CREATE_BLOG:
            return {
                ...state,
                blogItem: action.blog
            }
        default:
            return {
                ...state
            }
    }
}