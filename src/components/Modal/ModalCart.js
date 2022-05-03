import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap'
import * as actions from '../../actions/CartActions'
import { Link } from 'react-router-dom';

class ModalCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: this.props.modalProps.open
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.modalProps.open !== this.props.modalProps.open) {
            this.setState({
                modalIsOpen: nextProps.modalProps.open
            })
        }
    }

    format_curency = ((money) => {
        money = money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        return money + "₫";
    });

    closeModal = () => {
        this.props.hideModal();
    }

    showTotalPrice = (price, quantity) => {
        var total = 0;
        total = price * quantity;
        return this.format_curency(total)
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

    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].quantity * cart[i].product.price;
            }
        }
        return this.format_curency(total);
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
                        <th>{this.format_curency(item.product.price)}</th>
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
        }
    }

    render() {
        var { cart } = this.props;
        if (!this.props.modalType) {
            return null;
        }
        return (
            // <Modal
            //     size="lg"
            //     centered
            //     show={this.state.modalIsOpen} onHide={this.closeModal}>
            <>
                <Modal.Header>
                    <Modal.Title>
                        Bạn có {this.showTotalItem(cart)} sản phẩm trong giỏ hàng
                        </Modal.Title>
                    <button
                        type="button"
                        className="close-header"
                        onClick={this.closeModal}
                    >
                        <i className="fa fa-times mr-3"></i>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <div className="table-responsive">
                        <table className="table product-table">
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
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="cart__total">
                        <h3 className="cart__total--text">Tổng cộng:
                                <span className="cart__total--price">{this.showTotalAmount(cart)}</span>
                        </h3>
                    </div>
                    <div className="cart__action mt-4 mb-4">
                        <Link to="/collections/all" className="cart__action--btn">
                            <i className="fas fa-caret-left mr-2"></i>
                                Tiếp tục mua hàng
                            </Link>
                        <Link to="/cart" className="cart__action--btn">
                            Tới giỏ hàng
                            <i className="fas fa-caret-right ml-2"></i>
                        </Link>
                    </div>
                </Modal.Footer>
            {/* </Modal> */}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.modal,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItemCart: (product) => {
            dispatch(actions.deleteItemCart(product))
        },
        updateItemCart: (product, quantity) => {
            dispatch(actions.updateItemCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCart);
