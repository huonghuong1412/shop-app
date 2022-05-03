import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CartAction extends Component {

    format_curency = ((money) => {
        money = money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        return money + "₫";
    });

    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].quantity * cart[i].product.price;
            }
        }
        return this.format_curency(total);
    }

    render() {
        var { cart } = this.props;
        return (
            <>
                <div className="cart__total">
                    <h3 className="cart__total--text text-end">Tổng cộng:
                        <span className="cart__total--price">{this.showTotalAmount(cart)}</span>
                    </h3>
                </div>
                <div className="cart__action mt-4 mb-4" style={{float: "right"}}>
                    <Link to="/collections/all" className="cart__action--btn">
                        <i className="fas fa-caret-left mr-2"></i>
                            Tiếp tục mua hàng
                        </Link>
                    <Link to="/checkout" className="cart__action--btn">
                        Thanh toán
                        <i className="fas fa-caret-right ml-2"></i>
                    </Link>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartAction);