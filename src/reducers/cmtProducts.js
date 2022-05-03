import * as types from '../constants'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SEND_COMMENT_PRODUCT:
            state.push(action.comment)
            return [...state];
        case types.GET_ALL_COMMENT_PRODUCT:
            state = action.comments;
            return [...state];
        default:
            return [...state]
    }
}