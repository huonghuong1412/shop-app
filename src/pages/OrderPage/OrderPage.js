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
                        <td className="product__quantity visually-hidden"><em>S??? l?????ng:</em> {item.quantity}</td>
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
            alert("Nh???p ?????y ????? th??ng tin ?????t h??ng")
        } else if (!regexPhone.test(phoneUser)) {
            alert("S??? ??i???n tho???i c?? 10 ch??? s???");
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
                status: 'Ch??a ch???t',
                listOrder: listOrder
            }
            this.props.addOrder(order);
            alert("?????t h??ng th??nh c??ng")
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
                                Th??ng tin mua va?? nh????n ha??ng
                            </h1>
                            <div className="contact-form-group">
                                <input type="text"
                                    placeholder="Ho?? va?? t??n"
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
                                    placeholder="S???? ??i????n thoa??i"
                                    name="phone"
                                    className="contact-form-group-input"
                                    required
                                    defaultValue={phone}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="text"
                                    placeholder="??i??a chi??"
                                    name="address" className="contact-form-group-input"
                                    required
                                    defaultValue={address}
                                    onChange={this.handleChange}
                                />
                                <textarea
                                    placeholder="Ghi chu??"
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
                                V????n chuy????n
                            </h1>
                            <div className="content-box">
                                <div className="content-box__row">
                                    <div className="radio-wrapper">
                                        <div className="radio__input">
                                            <input type="radio" id="input-radio" className="input-radio" defaultChecked />
                                            <label htmlFor="input-radio" className="radio__label">
                                                <span className="radio__label__primary">
                                                    Giao ha??ng t????n n??i
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
                                Thanh toa??n
                            </h1>
                            <div className="content-box">
                                <div className="content-box__row">
                                    <div className="radio-wrapper">
                                        <div className="radio__input">
                                            <input type="radio" id="input-radio-1" className="input-radio" defaultChecked />
                                            <label htmlFor="input-radio-1" className="radio__label">
                                                <span className="radio__label__primary">
                                                    Thanh toa??n khi nh????n ha??ng
                                                </span>
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <h1 className="checkout__info--title">
                                ????n ha??ng ({this.totalItem(cart)} sa??n ph????m)
                            </h1>
                            <div className="checkout__sidebar">
                                <div className="checkout__summary">
                                    <div className="checkout__item">
                                        <table className="product-table">
                                            <caption className="visually-hidden">
                                                Chi ti????t ????n ha??ng
                                            </caption>
                                            <thead className="product-table__header">
                                                <tr>
                                                    <th>
                                                        <span className="visually-hidden">???nh s???n ph???m</span>
                                                    </th>
                                                    <th>
                                                        <span className="visually-hidden">M?? t???</span>
                                                    </th>
                                                    <th>
                                                        <span className="visually-hidden">S??? l?????ng</span>
                                                    </th>
                                                    <th>
                                                        <span className="visually-hidden">????n gi??</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.showListItemCart(cart)}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="checkout__voucher">
                                        <h3 className="visually-hidden">Ma?? khuy????n ma??i</h3>
                                        <div className="checkout__voucher-form">
                                            <input type="text" placeholder="Ma?? gia??m gia??" className="contact-form-group-input" required />
                                            <button type="submit" className="checkout__voucher--btn">
                                                A??p du??ng
                                            </button>
                                        </div>
                                    </div>
                                    <div className="checkout__amount">
                                        <h3 className="checkout__amount-item">
                                            <span className="checkout__amount--title">
                                                Ta??m ti??nh
                                            </span>
                                            <span className="checkout__amount--price">
                                                {format_curency(this.showCartTotal(cart))}
                                            </span>
                                        </h3>
                                        <h3 className="checkout__amount-item">
                                            <span className="checkout__amount--title">
                                                Phi?? v????n chuy????n
                                            </span>
                                            <span className="checkout__amount--price">
                                                {format_curency(0)}
                                            </span>
                                        </h3>
                                        <h3 className="checkout__amount-item total-price">
                                            <span className="checkout__amount--title">
                                                T????ng c????ng
                                            </span>
                                            <span className="checkout__amount--price">
                                                {format_curency(this.showCartTotal(cart))}
                                            </span>
                                        </h3>
                                    </div>
                                    <div className="checkout__btn">
                                        <Link to="/cart" className="previous-link">
                                            <i className="previous-link__arrow">???</i>
                                            Quay v???? gio?? ha??ng
                                        </Link>
                                        <button href="/checkout/detail" className="checkout__voucher--btn" onClick={() => {
                                            this.handleCheckout()
                                        }}>
                                            <span className="spinner-label">
                                                ?????T H??NG
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