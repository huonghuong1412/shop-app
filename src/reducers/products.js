import * as types from './../constants'
// import { findIndex } from 'lodash'

const initialState = {
    isFetching: true,
    listProduct: [],
    productItem: {},
    totalProduct: 0
};

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listProduct: action.payload,
                totalProduct: action.payload.length
            }
        case types.SEARCH_PRODUCTS:
            return {
                ...state,
                listProduct: action.payload,
                totalProduct: action.payload.length
            }
            case types.GET_PRODUCT_DETAIL_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    productItem: action.payload
                }
        default:
            return state;
    }
}

export default myReducers