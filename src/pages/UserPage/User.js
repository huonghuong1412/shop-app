import React, { Component } from 'react';
import AccountSideBar from '../../components/User/AccountSideBar';
import Order from '../../components/User/Order';
import './index.css'
import { connect } from 'react-redux';
class User extends Component {

    render() {
        let { user } = this.props;
        return (
            <>
                <div className="account__page pt-3 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="account__page--title">Tài khoản của bạn</h3>
                            </div>
                            <AccountSideBar history={this.props.history} />
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="account__info">
                                    <h3 className="account__info--title">
                                        Thông tin tài khoản
                                    </h3>
                                    <h2 className="account__info--name">
                                        {user ? user.name : ''}
                                    </h2>
                                    <h2 className="account__info--email">
                                        {user ? user.email : ''}
                                    </h2>
                                    <h2 className="account__info--email">
                                        {user ? user.address : ''}
                                    </h2>
                                    <h2 className="account__info--email">
                                        {user ? user.phone : ''}
                                    </h2>
                                </div>
                                <Order />
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

export default connect(mapStateToProps, null)(User);
