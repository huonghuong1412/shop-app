import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderCart from './HeaderCart';
import { connect } from 'react-redux';
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textSearch: ''
        }
    }

    removeVietnameseTones(str) {
        return str.toLowerCase().normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .split(' ').join('-');
    }

    handleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        value = this.removeVietnameseTones(value)
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <>
                <header className="header" id="header">
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar__collapse--icon">
                            <i className="fa fa-bars"></i>
                        </div>
                        <div className="header__logo">
                            <Link to="/">
                                <img className="header__logo-img" src="https://theme.hstatic.net/1000239816/1000467243/14/logo.png?v=186" alt="" />
                            </Link>
                        </div>
                        <div className="header__main--search">
                            <input
                                type="text"
                                className="header__main--search-input"
                                placeholder="Tìm kiếm"
                                name="textSearch"
                                onChange={this.handleChange}
                            />
                            <Link to={`/search/keyword/${this.state.textSearch}`} className="header__main--search-btn">
                                <i className="fas fa-search"></i>
                            </Link>
                        </div>
                        <div className="header__aside">
                            <div className="header__aside--info">
                                {
                                    this.props.currentUser ? (
                                        <ul className="header__aside--info-top">
                                            <li>
                                                <Link to="/account" className="header__aside--info-link">
                                                    Tài khoản của bạn
                                                </Link>
                                            </li>
                                        </ul>
                                    ) : (
                                            <ul className='header__aside--info-top'>
                                                <li>
                                                    <Link to="/account/register" className="header__aside--info-link">
                                                        Đăng ký
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/account/login" className="header__aside--info-link">
                                                        Đăng nhập
                                                    </Link>
                                                </li>
                                            </ul>
                                        )
                                }
                                <Link to="/account/login" className="header__aside--info-user">
                                    <i className="fa fa-user"></i>
                                </Link>
                                <div className="header__aside--info-bottom">
                                    <p>Miễn phí vận chuyển toàn quốc</p>
                                </div>
                            </div>
                            <HeaderCart />
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, null)(Header);
