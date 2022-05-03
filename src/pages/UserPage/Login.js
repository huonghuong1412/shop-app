import React, { Component } from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import firebase from '../../config/Fire'
import { connect } from 'react-redux';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        var { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                this.props.history.goBack();
            })
            .catch(err => {
                this.setState({
                    firebaseError: err.message
                })
            })
    }

    render() {
        var { email, password, firebaseError } = this.state;
        if(firebaseError) {
            firebaseError = "Sai tài khoản hoặc mật khẩu"
        };
        return (
            <>
                <div className="login__page pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="account__page--title">Đăng nhập</h3>
                                <span style={{ textAlign: 'center', width: '100%', display: 'block', fontSize: '1.4rem', marginTop: '15px' }}>
                                    Tài khoản: user1@gmail.com, Mật khẩu: user1user1</span>
                            </div>
                            {
                                firebaseError ? (
                                    <div className="col-12">
                                        <h3 className="account__page--title">{firebaseError}</h3>
                                    </div>
                                ) : (
                                    ""
                                )
                            }
                            <div className="col-12">
                                <div className="customer-login">
                                    <div onSubmit={this.handleSubmit} id="customer_login">
                                        <div className="large_form">
                                            <label htmlFor="customer_email" className="icon-field">
                                                <i className="fa fa-envelope icon-login"></i>
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                id="customer_email"
                                                placeholder="Email"
                                                className="customer_input"
                                                value={email}
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
                                        <div className="action_bottom">
                                            <input
                                                className="btn btn-signin"
                                                type="submit"
                                                value="Đăng nhập"
                                                onClick={this.handleSubmit}
                                            />
                                        </div>
                                        <div className="req_pass">
                                            <Link to="/">Quên mật khẩu?</Link>
                                            <span>hoặc </span>
                                            <Link to="/account/register" title="Đăng ký">Đăng ký</Link>
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

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser
    }
}


export default connect(mapStateToProps, null)(Login);
