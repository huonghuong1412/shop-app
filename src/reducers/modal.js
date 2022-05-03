import * as types from './../constants'

const initialState = {
    modalType: null,
    modalProps: {
        open: false
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.SHOW_MODAL:
            return {
                modalProps: action.modalProps,
                modalType: action.modalType,
                type: action.type
            }
        case types.HIDE_MODAL:
            return initialState
        default:
            return state;
    }
}