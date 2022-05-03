import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../config/Fire'
class AccountSideBar extends Component {

    handleLogout = () => {
        firebase.auth().signOut();
        this.props.history.push("/account/login")
    }
    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="account__sidebar">
                    <h4 className="account__sidebar--title">
                        Tài khoản
                                    </h4>
                    <div className="account__sidebar--content">
                        <ul className="account__sidebar--list">
                            <li>
                                <Link to="/account" className="account__sidebar--link">
                                    Thông tin tài khoản
                                </Link>
                            </li>
                            <li>
                                <button onClick={this.handleLogout} 
                                className="account__sidebar--btn">
                                    Đăng xuất
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountSideBar;
