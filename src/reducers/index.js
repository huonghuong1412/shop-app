import { combineReducers } from 'redux'
import products from './products'
import modal from './modal'
import cart from './cart'
import user from './user'
import blogs from './blogs'
import cmt from './cmtProducts'

const rootReducer = combineReducers({
    products,
    modal,
    cart,
    user,
    blogs,
    cmt
})

export default rootReducer