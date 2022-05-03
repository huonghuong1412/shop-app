import React, { Component } from 'react';
import './index.css'
import firebase from '../../config/Fire'
const styleForm = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            address: '',
            phone: '',
            firebaseError: null
        }
    }

    componentDidMount() {
        if (firebase.auth().currentUser) {
            this.props.history.push('/')
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var { email, name, address, password, phone } = this.state;
        var regexPhone = /((09|03|07|08|05|01)+([0-9]{8})\b)/g;
        var regexEmail = /\S+@\S+\.\S+/;
        var regexPass = /^(?=.*[A-Za-z])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (email === "" || name === "" || address === "" || phone === "") {
            alert("Điền đầy đủ thông tin")
        } else if (!regexPass.test(password)) {
            alert("Mật khẩu ít nhất 8 ký tự, gồm cả chữ hoa, số và ký tự đặc biệt")
        } else if (!regexPhone.test(phone)) {
            alert('Số điện thoại phải có 10 chữ số')
        } else if (!regexEmail.test(email)) {
            alert("Nhập đúng định dạng email")
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(function (res) {
                    firebase.database().ref('users/').push({
                        userId: firebase.auth().currentUser.uid,
                        email: firebase.auth().currentUser.email,
                        name: name,
                        role: 'client',
                        address: address,
                        phone: phone
                    })
                })
                .catch(err => {
                    this.setState({
                        firebaseError: err.message
                    })
                })
            alert('Đăng ký thành công')
            this.props.history.push('/account')
        }
    }

    render() {
        var { name, email, password, address, phone } = this.state;
        return (
            <>
                <div className="login__page pt-3 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="account__page--title">Đăng ký</h3>
                            </div>
                            <div className="col-12">
                                <div clas="customer-login pb-5" style={styleForm}>
                                    <div className="customer-login--inner">
                                        <div className="large_form">
                                            <label htmlFor="customer_email" className="icon-field">
                                                <i className="fa fa-envelope icon-login"></i>
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={email}
                                                id="customer_email"
                                                placeholder="Email"
                                                className="customer_input"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="large_form">
                                            <label htmlFor="customer_password" className="icon-field">
                                                <i className="fas fa-shield-alt icon-login"></i>
                                            </label>
                                            <input
                                                required
                                                type="password"
                                                name="password"
                                                id="customer_password"
                                                placeholder="Mật khẩu"
                                                className="customer_input"
                                                value={password}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="large_form">
                                            <label htmlFor="customer_fullname" className="icon-field">
                                                <i className="fa fa-envelope icon-login"></i>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={name}
                                                id="customer_fullname"
                                                placeholder="Họ tên"
                                                className="customer_input"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="large_form">
                                            <label htmlFor="customer_address" className="icon-field">
                                                <i className="fa fa-envelope icon-login"></i>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="address"
                                                value={address}
                                                id="customer_address"
                                                placeholder="Địa chỉ"
                                                className="customer_input"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="large_form">
                                            <label htmlFor="customer_phone" className="icon-field">
                                                <i className="fa fa-envelope icon-login"></i>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="phone"
                                                value={phone}
                                                id="customer_phone"
                                                placeholder="Số điện thoại"
                                                className="customer_input"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="action_bottom">
                                            <button
                                                className="btn btn-signin"
                                                onClick={this.handleSubmit}
                                            >Đăng ký</button>
                                        </div>
                                    </div>
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Register;
