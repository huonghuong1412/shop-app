import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'
class SideBar extends Component {
    render() {
        return (
            <div className="col-lg-3 col-sm-12 col-md-12">
                <div className="sidebar__sticky sticky-top">
                    <div className="sidebar__inner">
                        <h3 className="sidebar__inner--title">
                            Danh mục <span className="sidebar__inner--responsive">
                                <i className="fa fa-caret-down"></i>
                            </span>
                        </h3>
                        <ul className="sidebar__inner--menu show">
                            <li>
                                <Link to="/collections/all" className="sidebar__inner--link">
                                    Tất cả sản phẩm
                                </Link>
                            </li>
                            <li>
                                <Link to="/collections/ao-khoac" className="sidebar__inner--link">
                                    Áo khoác
                                </Link>
                            </li>
                            <li>
                                <Link to="/collections/ao" className="sidebar__inner--link">
                                    Áo
                                </Link>
                            </li>
                            <li>
                                <Link to="/collections/quan" className="sidebar__inner--link">
                                    Quần
                                </Link>
                            </li>
                            <li>
                                <Link to="/collections/vay-dam" className="sidebar__inner--link">
                                    Váy đầm
                                </Link>
                            </li>
                            <li>
                                <Link to="/collections/bo-mac-nha" className="sidebar__inner--link">
                                    Bộ mặc nhà
                                </Link>
                            </li>
                            <li>
                                <Link to="/collections/giay" className="sidebar__inner--link">
                                    Giày
                                </Link>
                            </li>
                            <li>
                                <Link to="/collections/tui-xach" className="sidebar__inner--link">
                                    Túi xách
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
