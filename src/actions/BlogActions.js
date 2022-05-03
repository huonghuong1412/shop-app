import * as types from '../constants'
import callAPI from '../callAPI/callAPI'
export const getAllBlog = (blogs) => {
    return {
        type: types.GET_ALL_BLOG,
        blogs
    }
}

export const fetchAllBlogRequest = () => {
    return dispatch => {
        return callAPI('blogs?sortBy=createDate&order=desc', 'GET', null).then(res => {
            dispatch(getAllBlog(res.data))
        })
    }
}

export const getBlogDetail = (blog) => {
    return {
        type: types.GET_BLOG_DETAIL,
        blog
    }
}

export const fetchBlogDetail = (id) => {
    return dispatch => {
        return callAPI(`blogs/${id}`, 'GET', null).then(res => {
            dispatch(getBlogDetail(res.data))
        })
    }
}

export const createBlog = (blog) => {
    return {
        type: types.CREATE_BLOG,
        blog
    }
}

export const fetchCreateBlog = (blog) => {
    return dispatch => {
        return callAPI('blogs', 'POST', blog).then(res => {
            dispatch(createBlog(res.data))
        })
    }
}