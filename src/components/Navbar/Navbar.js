import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar">
                    <span className="close">
                        <i className="fa fa-times"></i>
                    </span>
                    <div className="guest">
                        <div className="guest__image">
                            <img src="https://kt.city/static/default-avatar.png" className="guest__image--white" alt="" />
                        </div>
                        <div className="guest__info">
                            Hello,
                    <strong>Guest</strong>
                        </div>
                    </div>
                    <div className="container">
                        <div className="navbar__main">
                            <ul className="navbar__main--menu">
                                <li>
                                    <Link to="/" className="navbar__main--link active">
                                        <span>Trang chủ</span>
                                    </Link>
                                </li>
                                <li className="hasDropdown">
                                    <Link to="/collections/all" className="navbar__main--link">
                                        <span>Sản phẩm</span>
                                        <span>
                                            <i className="fas fa-caret-down navbar__main--link-icon"></i>
                                        </span>
                                    </Link>
                                    <ul className="dropdown-list">
                                        <li className="dropdown-title">
                                            <span className="dropdown-title-icon">
                                                <i className="fas fa-chevron-left"></i>
                                            </span>
                                            <span className="dropdown-title-text">Sản phẩm</span>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/collections/ao-khoac" className="navbar__main--link">
                                                Áo khoác
                                            </Link>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/collections/ao" className="navbar__main--link">
                                                Áo
                                            </Link>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/collections/quan" className="navbar__main--link">
                                                Quần
                                            </Link>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/collections/vay-dam" className="navbar__main--link">
                                                Váy đầm
                                            </Link>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/collections/bo-mac-nha" className="navbar__main--link">
                                                Bộ mặc nhà
                                            </Link>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/collections/giay" className="navbar__main--link">
                                                Giày
                                            </Link>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/collections/tui-xach" className="navbar__main--link">
                                                Túi xách
                                            </Link>
                                        </li>
                                    </ul>
                                    <span className="navbar__main--link-right">
                                        <i className="fas fa-angle-right"></i>
                                    </span>
                                </li>
                                <li className="hasDropdown">
                                    <Link to="/pages/huong-dan" className="navbar__main--link">
                                        <span>Hướng dẫn</span>
                                        <span>
                                            <i className="fas fa-caret-down navbar__main--link-icon"></i>
                                        </span>
                                    </Link>
                                    <ul className="dropdown-list">
                                        <li className="dropdown-title">
                                            <span className="dropdown-title-icon">
                                                <i className="fas fa-chevron-left"></i>
                                            </span>
                                            <span className="dropdown-title-text">Hướng dẫn</span>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/pages/tai-khoan-ngan-hang" className="navbar__main--link">
                                                Tài khoản ngân hàng
                                    </Link>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/pages/huong-dan-mua-hang" className="navbar__main--link">
                                                Hướng dẫn mua hàng
                                    </Link>
                                        </li>
                                    </ul>
                                    <span className="navbar__main--link-right">
                                        <i className="fas fa-angle-right"></i>
                                    </span>
                                </li>
                                <li className="hasDropdown">
                                    <Link to="/pages/chinh-sach-van-chuyen" className="navbar__main--link">
                                        <span>Chính sách</span>
                                        <span>
                                            <i className="fas fa-caret-down navbar__main--link-icon"></i>
                                        </span>
                                    </Link>
                                    <ul className="dropdown-list">
                                        <li className="dropdown-title">
                                            <span className="dropdown-title-icon">
                                                <i className="fas fa-chevron-left"></i>
                                            </span>
                                            <span className="dropdown-title-text">Chính sách</span>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/pages/chinh-sach-van-chuyen" className="navbar__main--link">
                                                Chính sách vận chuyển
                                    </Link>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/pages/chinh-sach-doi-tra" className="navbar__main--link">
                                                Chính sách đổi trả
                                    </Link>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/pages/chinh-sach-thanh-toan" className="navbar__main--link">
                                                Chính sách thanh toán
                                    </Link>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/pages/chinh-sach-bao-mat" className="navbar__main--link">
                                                Chính sách bảo mật
                                    </Link>
                                        </li>
                                        <li className="dropdown-item">
                                            <Link to="/pages/chinh-sach-bao-hanh" className="navbar__main--link">
                                                Chính sách bảo hành
                                    </Link>
                                        </li>
                                    </ul>
                                    <span className="navbar__main--link-right">
                                        <i className="fas fa-angle-right"></i>
                                    </span>
                                </li>
                                <li>
                                    <Link to="/blogs/news" className="navbar__main--link">
                                        <span>Tin tức</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pages/about-us" className="navbar__main--link">
                                        <span>Giới thiệu</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pages/lien-he" className="navbar__main--link">
                                        <span>Liên hệ</span>
                                    </Link>
                                </li>
                                <li>
                                    <a href="https://huongz-admin.web.app/" rel="noopener noreferrer" target="_blank" className="navbar__main--link">
                                        <span>Admin</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="navbar__main--phone">
                                <span className="navbar__main--phone-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </span>
                                <span className="navbar__main--phone-number">08.88.37.29.29</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
