import * as types from './../constants'
import callAPI from './../callAPI/callAPI'

// get all
export const getAllProduct = (products) => {
    return {
        type: types.GET_ALL_PRODUCT_SUCCESS,
        payload: products
    }
}

export const fetchAPIALLProduct = () => {
    return dispatch => {
        return callAPI('products', 'GET', null).then(res => {
            dispatch(getAllProduct(res.data))
        })
    }
}

// get detail by id
export const getProductDetail = (product) => {
    return {
        type: types.GET_PRODUCT_DETAIL_SUCCESS,
        payload: product
    }
}

export const fetchAPIProductItem = (id) => {
    return dispatch => {
        return callAPI(`products/${id}`, 'GET', null).then(res => {
            dispatch(getProductDetail(res.data))
        })
    }
}

// Search

export const searchProduct = (products) => {
    return {
        type: types.SEARCH_PRODUCTS,
        payload: products
    }
}

export const fetchAPISearchProduct = (textSearch) => {
    return dispatch => {
        return callAPI(`products?search=${textSearch}`, 'GET', null).then(res => {
            dispatch(searchProduct(res.data));

        })
    }
}