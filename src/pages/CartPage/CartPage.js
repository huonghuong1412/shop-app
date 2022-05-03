import React, { Component } from 'react';
import Cart from '../../components/Cart/Cart';
import CartAction from '../../components/Cart/CartAction';
import './index.css'

class CartPage extends Component {
    render() {
        return (
            <section className="cart__page">
                <div className="container">
                    <div className="row pt-5 mb-3">
                        <div className="col-12">
                            <h2>Giỏ hàng</h2>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-12">
                            <div className="table-responsive">
                                <Cart />
                            </div>
                        </div>
                    </div>
                    <div className="row pb-5 text-end">
                        <div className="col-12">
                            <CartAction />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CartPage;
