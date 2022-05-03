import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/CartActions'
import { format_curency } from '../../actions/FunctionActions'

class Cart extends Component {

    showTotalPrice = (price, quantity) => {
        var total = 0;
        total = price * quantity;
        return format_curency(total)
    }

    showTotalItem = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].quantity;
            }
        }
        return total;
    }

    showCartItem = (cart) => {
        if (cart.length > 0) {
            return cart.map((item, index) => {
                return (
                    <tr key={index}>
                        <th>
                            <img src={item.product.img[0]} alt="" />
                        </th>
                        <th>{item.product.name}</th>
                        <th>{format_curency(item.product.price)}</th>
                        <th>
                            <div className="detail-product-quantity">
                                <div className="detail-product-action">
                                    <button
                                        type="button"
                                        className="detail-product-quantity-btn"
                                        onClick={() => this.props.updateItemCart(item.product, item.quantity - 1)}
                                    >-</button>
                                    <span className="qty">{item.quantity}</span>
                                    <button
                                        type="button"
                                        className="detail-product-quantity-btn"
                                        onClick={() => this.props.updateItemCart(item.product, item.quantity + 1)}
                                    >+</button>
                                </div>
                            </div>
                        </th>
                        <th>{this.showTotalPrice(item.product.price, item.quantity)}</th>
                        <th>
                            <button
                                className="close-btn"
                                onClick={() => this.props.deleteItemCart(item.product)}
                            >
                                <i className="fa fa-times"></i>
                            </button>
                        </th>
                    </tr>
                )
            })
        } else {

        }
    }

    render() {
        var { cart } = this.props;
        return cart.length > 0 ? (
            <table className="table product-table" style={{ borderBottom: "1px solid #e1e1e1" }}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Tên Sản phẩm</th>
                        <th>Giá tiền</th>
                        <th>Số lượng</th>
                        <th>Tổng cộng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.showCartItem(cart)}
                </tbody>
            </table>
        ) : (
                <>
                    <img width="190px" src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" alt="" />
                    <h4 class="header__cart-list-heading mt-5 mb-5 text-center">
                        Không có sản phẩm trong giỏ hàng
                        </h4>
                    <Link class="mb-5 back-btn" to="/collections/all">
                        Tiếp tục mua sắm
                        </Link>
                </>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItemCart: (product) => {
            dispatch(actions.deleteItemCart(product))
        },
        updateItemCart: (product, quantity) => {
            dispatch(actions.updateItemCart(product, quantity, 35))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
