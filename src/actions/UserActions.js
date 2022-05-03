import * as types from '../constants'
import callAPI from '../callAPI/callAPI'
// Order
export const userOrder = (order) => {
    return {
        type: types.ADD_ORDER,
        order
    }
}

export const fetchUserOrderRequest = (order) => {
    return dispatch => {
        return callAPI('orders', 'POST', order).then(res => {
            dispatch(userOrder(res.data));
            dispatch(fetchAllOrders())
        })
    }
}

// get order

export const getOrders = (orders) => {
    return {
        type: types.GET_ALL_ORDER,
        orders
    }
}

export const fetchAllOrders = () => {
    return dispatch => {
        return callAPI('orders', 'GET', null).then((res) => {
            dispatch(getOrders(res.data))
        })
    }
}

//
export const setCurrentUser = (user) => {
    return {
        type: types.SET_CURRENT_USER_SUCCESS,
        payload: user
    }
}

export const setLogout = () => {
    return {
        type: types.SET_LOGOUT
    }
}