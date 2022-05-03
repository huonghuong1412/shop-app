import * as types from './../constants'

export const addToCart = (product, quantity, size) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity,
        size
    }
}

export const updateItemCart = (product, quantity, size) => {
    return {
        type: types.UPDATE_ITEM_CART,
        product,
        quantity,
        size
    }
}

export const deleteItemCart = (product) => {
    return {
        type: types.DELETE_ITEM_CART,
        product
    }
}

export const cartComplete = () => {
    return {
        type: types.CART_COMPLETE
    }
}