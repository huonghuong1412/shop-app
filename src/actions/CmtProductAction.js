import * as types from '../constants'
import callAPI from '../callAPI/callAPI'

export const getAllCmt = (comments) => {
    return {
        type: types.GET_ALL_COMMENT_PRODUCT,
        comments
    }
}

export const fetchAllCommentProduct = () => {
    return dispatch => {
        return callAPI('comments', 'GET', null).then(res => {
            dispatch(getAllCmt(res.data))
        })
    }
}

export const sendComment = (comment) => {
    return {
        type: types.SEND_COMMENT_PRODUCT,
        comment
    }
}

export const fetchSendComment = (comment) => {
    return dispatch => {
        return callAPI('comments', 'POST', comment).then(res => {
            dispatch(sendComment(res.data))
        })
    }
}