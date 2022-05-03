import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="footer__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="footer__content">
                                        <h3 className="footer__title">
                                            Giới thiệu
                                        </h3>
                                        <p className="description">
                                            ENDA Kisuhi – dựa trên tinh thần đơn giản, phóng khoáng, hiện đại chứa đựng sự cổ điển
                                            đầy tinh tế. Slogan "Kisuhi – Cùng bạn bước đi" Thể hiện Kisuhi luôn mong muốn các sản
                                            phẩm của Kisuhi sẽ luôn cùng bạn bước đi mọi nơi, để cùng thấy cuộc sống tươi đẹp hơn.
                                            Cùng với triết lý kinh doanh: Kisuhi đề cao giá trị của sự trung thực, Kisuhi kinh doanh
                                            bằng sự tử tế nên Kisuhi luôn cố gắng để mang đến giá trị tốt nhất, mang đến sự hài lòng
                                            cho khách hàng.
                                        </p>
                                        <ul className="footer__info">
                                            <li className="footer__info--item">
                                                <i className="fa fa-home"></i>
                                                <span className="footer__info--item-text">
                                                    948 Quang Trung, phường 8, quận Gò Vấp, HCM.
                                        </span>
                                            </li>
                                            <li className="footer__info--item">
                                                <i className="fa fa-envelope"></i>
                                                <span className="footer__info--item-text">
                                                    info@enda.vn
                                        </span>
                                            </li>
                                            <li className="footer__info--item">
                                                <i className="fa fa-home"></i>
                                                <span className="footer__info--item-text">
                                                    08.88.37.29.29
                                        </span>
                                            </li>
                                            <li className="footer__info--item">
                                                <i className="fa fa-print"></i>
                                                <span className="footer__info--item-text">
                                                    GPKD số 41M8035461
                                        </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="footer__content">
                                        <h3 className="footer__title">
                                            Liên kết
                                        </h3>
                                        <ul className="footer__link--list">
                                            <li>
                                                <Link to="/" className="footer__link--item">
                                                    Trang chủ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="footer__link--item">
                                                    Tất cả sản phẩm
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="footer__link--item">
                                                    Hướng dẫn
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="footer__link--item">
                                                    Chính sách đổi trả
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="footer__link--item">
                                                    Chính sách vận chuyển
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="footer__link--item">
                                                    Chính sách thanh toán
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="footer__link--item">
                                                    Chính sách bảo mật
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="footer__link--item">
                                                    Tìm kiếm
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="footer__link--item">
                                                    Giới thiệu
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="footer__content">
                                        <h3 className="footer__title">
                                            Về chúng tôi
                                        </h3>
                                        <ul className="footer__social">
                                            <li>
                                                <Link to="/" className="footer__social--icon">
                                                    <span>
                                                        <i className="fab fa-facebook-f"></i>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="footer__social--icon">
                                                    <span>
                                                        <i className="fab fa-twitter"></i>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="footer__social--icon">
                                                    <span>
                                                        <i className="fab fa-pinterest"></i>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="footer__social--icon">
                                                    <span>
                                                        <i className="fab fa-google-plus-g"></i>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="footer__social--icon">
                                                    <span>
                                                        <i className="fab fa-youtube"></i>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="footer__social--icon">
                                                    <span>
                                                        <i className="fab fa-instagram"></i>
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="footer__image">
                                            <img src="./img/dathongbao.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="footer__content">
                                        <h3 className="footer__title">
                                            Kết nối với chúng tôi
                                        </h3>
                                        <div className="footer__iframe">
                                            <img src="https://theme.hstatic.net/1000239816/1000467243/14/logo.png?v=186" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <p className="copyright">
                                        Copyright © 2020 ENDA. Powered by Haravan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;
