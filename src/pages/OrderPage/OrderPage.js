import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/UserActions'
import { cartComplete } from '../../actions/CartActions';
import firebase from '../../config/Fire'
import { format_curency } from '../../actions/FunctionActions'

class OrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                userId: '',
                name: '',
                email: '',
                phone: '',
                address: '',
                note: '',
            }
        }
    }

    componentDidMount() {
        firebase.database().ref('users/').on('value', (data) => {
            var users = data.val();
            var currentUser = firebase.auth().currentUser;
            var idUser = currentUser ? currentUser.uid : '';
            for (var user in users) {
                if (users[user].userId === idUser) {
                    this.setState({
                        user: {
                            userId: users[user].userId,
                            name: users[user].name,
                            email: users[user].email,
                            phone: users[user].phone,
                            address: users[user].address,
                        }
                    })
                }
            }
        })
    }

    handleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    totalItem = (cart) => {
        var tong = 0;
        for (var i = 0; i < cart.length; i++) {
            tong += cart[i].quantity;
        }
        return tong;
    }

    showListItemCart = (cart) => {
        var result = null;
        if (cart) {
            result = cart.map((item, index) => {
                return (
                    <tr className="product" key={index}>
                        <td className="product__image">
                            <div className="product-thumbnail">
                                <div className="product-thumbnail__wrapper">
                                    <img src={item.product.img[0]} alt="" className="product-thumbnail__image" />
                                </div>
                                <span className="product-thumbnail__quantity">{item.quantity}</span>
                            </div>
                        </td>
                        <th className="product__description">
                            <span className="product__description__name">
                                {item.product.name}
                            </span>
                            <span className="product__description__property">
                                {item.product.sku}
                            </span>
                        </th>
                        <td className="product__quantity visually-hidden"><em>Số lượng:</em> {item.quantity}</td>
                        <td className="product__price">
                            {format_curency(item.product.price * item.quantity)}
                        </td>
                    </tr>
                )
            })
        }
        return result;
    }

    showCartTotal = (cart) => {
        var tong = 0;
        if (cart) {
            for (var i = 0; i < cart.length; i++) {
                tong += cart[i].product.price * cart[i].quantity;
            }
        }
        return tong;
    }

    handleCheckout = () => {
        var { cart } = this.props;
        var total = this.showCartTotal(cart);
        var date = new Date().toJSON();

        var { note } = this.state;
        var nameUser = this.state.user.name;
        var addressUser = this.state.user.address;
        var phoneUser = this.state.user.phone;
        var userId = this.state.user.userId;

        var regexPhone = /((09|03|07|08|05|01)+([0-9]{8})\b)/g;

        if (cart.length === 0 || cart === []) {
            this.props.history.push("/collections/all")
        } else if (this.state.user.userId === "") {
            this.props.history.push("/account/login");
        } else if (nameUser === "" || addressUser === "" || phoneUser === "") {
            alert("Nhập đầy đủ thông tin đặt hàng")
        } else if (!regexPhone.test(phoneUser)) {
            alert("Số điện thoại có 10 chữ số");
        } else {
            var listOrder = [];
            for (var i = 0; i < cart.length; i++) {
                listOrder.push({
                    idProduct: cart[i].product.id,
                    name: cart[i].product.name,
                    category: cart[i].product.category,
                    price: cart[i].product.price,
                    quantity: cart[i].quantity
                })
            }
            var order = {
                userId: userId,
                nameUser: nameUser,
                addressUser: addressUser,
                phoneUser: phoneUser,
                totalPrice: total,
                date: date,
                note: note,
                status: 'Chưa chốt',
                listOrder: listOrder
            }
            this.props.addOrder(order);
            alert("Đặt hàng thành công")
            this.props.cartComplete()
            this.props.history.push("/checkout/detail")
            this.props.getAllOrder();
        }
    }

    render() {
        var { cart } = this.props;
        var { name, address, phone, email, note } = this.state.user;
        return (
            <div className="checkout__page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <h1 className="checkout__info--title">
                                Thông tin mua và nhận hàng
                            </h1>
                            <div className="contact-form-group">
                                <input type="text"
                                    placeholder="Họ và tên"
                                    name="name"
                                    className="contact-form-group-input"
                                    required
                                    defaultValue={name}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="contact-form-group-input"
                                    required
                                    defaultValue={email}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="text"
                                    placeholder="Số điện thoại"
                                    name="phone"
                                    className="contact-form-group-input"
                                    required
                                    defaultValue={phone}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="text"
                                    placeholder="Địa chỉ"
                                    name="address" className="contact-form-group-input"
                                    required
                                    defaultValue={address}
                                    onChange={this.handleChange}
                                />
                                <textarea
                                    placeholder="Ghi chú"
                                    rows="3"
                                    cols="5"
                                    name="note"
                                    value={note}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <h1 className="checkout__info--title">
                                Vận chuyển
                            </h1>
                            <div className="content-box">
                                <div className="content-box__row">
                                    <div className="radio-wrapper">
                                        <div className="radio__input">
                                            <input type="radio" id="input-radio" className="input-radio" defaultChecked />
                                            <label htmlFor="input-radio" className="radio__label">
                                                <span className="radio__label__primary">
                                                    Giao hàng tận nơi
                                                </span>
                                                <span className="radio__label__accessory">
                                                    <span className="content-box__emphasis">
                                                        Freeship
                                                    </span>
                                                </span>
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <h1 className="checkout__info--title" style={{ marginTop: '20px' }}>
                                Thanh toán
                            </h1>
                            <div className="content-box">
                                <div className="content-box__row">
                                    <div className="radio-wrapper">
                                        <div className="radio__input">
                                            <input type="radio" id="input-radio-1" className="input-radio" defaultChecked />
                                            <label htmlFor="input-radio-1" className="radio__label">
                                                <span className="radio__label__primary">
                                                    Thanh toán khi nhận hàng
                                                </span>
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <h1 className="checkout__info--title">
                                Đơn hàng ({this.totalItem(cart)} sản phẩm)
                            </h1>
                            <div className="checkout__sidebar">
                                <div className="checkout__summary">
                                    <div className="checkout__item">
                                        <table className="product-table">
                                            <caption className="visually-hidden">
                                                Chi tiết đơn hàng
                                            </caption>
                                            <thead className="product-table__header">
                                                <tr>
                                                    <th>
                                                        <span className="visually-hidden">Ảnh sản phẩm</span>
                                                    </th>
                                                    <th>
                                                        <span className="visually-hidden">Mô tả</span>
                                                    </th>
                                                    <th>
                                                        <span className="visually-hidden">Sổ lượng</span>
                                                    </th>
                                                    <th>
                                                        <span className="visually-hidden">Đơn giá</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.showListItemCart(cart)}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="checkout__voucher">
                                        <h3 className="visually-hidden">Mã khuyến mại</h3>
                                        <div className="checkout__voucher-form">
                                            <input type="text" placeholder="Mã giảm giá" className="contact-form-group-input" required />
                                            <button type="submit" className="checkout__voucher--btn">
                                                Áp dụng
                                            </button>
                                        </div>
                                    </div>
                                    <div className="checkout__amount">
                                        <h3 className="checkout__amount-item">
                                            <span className="checkout__amount--title">
                                                Tạm tính
                                            </span>
                                            <span className="checkout__amount--price">
                                                {format_curency(this.showCartTotal(cart))}
                                            </span>
                                        </h3>
                                        <h3 className="checkout__amount-item">
                                            <span className="checkout__amount--title">
                                                Phí vận chuyển
                                            </span>
                                            <span className="checkout__amount--price">
                                                {format_curency(0)}
                                            </span>
                                        </h3>
                                        <h3 className="checkout__amount-item total-price">
                                            <span className="checkout__amount--title">
                                                Tổng cộng
                                            </span>
                                            <span className="checkout__amount--price">
                                                {format_curency(this.showCartTotal(cart))}
                                            </span>
                                        </h3>
                                    </div>
                                    <div className="checkout__btn">
                                        <Link to="/cart" className="previous-link">
                                            <i className="previous-link__arrow">❮</i>
                                            Quay về giỏ hàng
                                        </Link>
                                        <button href="/checkout/detail" className="checkout__voucher--btn" onClick={() => {
                                            this.handleCheckout()
                                        }}>
                                            <span className="spinner-label">
                                                ĐẶT HÀNG
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        user: state.user.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllOrder: () => {
            dispatch(actions.fetchAllOrders())
        },
        addOrder: (order) => {
            dispatch(actions.fetchUserOrderRequest(order))
        },
        cartComplete: () => {
            dispatch(cartComplete())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);