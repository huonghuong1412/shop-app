import * as types from './../constants'

const cart = JSON.parse(sessionStorage.getItem('cart'));

const initialState = cart ? cart : []

var findIndex = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    } else {
        index = -1;
    }
    return index;
}

export default (state = initialState, action) => {
    var { product, quantity, size } = action;
    switch (action.type) {
        case types.ADD_TO_CART:
            var index = findIndex(state, product)
            if (index !== -1) {
                state[index].quantity += action.quantity;
            } else {
                state.push({
                    product,
                    quantity,
                    size
                })
            }
            sessionStorage.setItem('cart', JSON.stringify(state))
            return [...state]

        case types.UPDATE_ITEM_CART:
            index = findIndex(state, product)
            state[index].quantity = quantity;
            if(quantity <= 0) {
                state.splice(index, 1);
            }
            sessionStorage.setItem('cart', JSON.stringify(state))
            return [...state]

        case types.DELETE_ITEM_CART:
            index = findIndex(state, product)
            if (index !== -1) {
                state.splice(index, 1);
            }
            sessionStorage.setItem('cart', JSON.stringify(state))
            return [...state]

        case types.CART_COMPLETE:
            sessionStorage.removeItem('cart')
            state = [];
            return [...state]

        default:
            return [...state]
    }
}