import React, { Component } from 'react';
import './index.css'

class Heading extends Component {

    sortProducts = (sortBy, sortValue) => {
        this.props.sortProducts(sortBy, sortValue);
    }

    render() {
        var { textHeading } = this.props;
        var title = "";
        switch (textHeading) {
            case 'all':
                title = "Tất cả sản phẩm";
                break;
            case 'ao-khoac':
                title = "Áo khoác";
                break;
            case 'ao':
                title = "Áo";
                break;
            case 'quan':
                title = "Quần";
                break;
            case 'vay-dam':
                title = "Váy đầm";
                break;
            case 'bo-mac-nha':
                title = "Bộ mặc nhà";
                break;
            case 'giay':
                title = "Giày";
                break;
            case 'tui-xach':
                title = "Túi xách";
                break;
            default:
                title = "Tất cả sản phẩm";
                break;
        }
        return (
            <div className="col-12">
                <div className="main__content--heading">
                    <h3 className="main__content--heading-title">
                        {title}
                    </h3>
                    <div className="main__content--heading-sort">
                        <span>Sắp xếp theo: </span>
                        <div className="dropdown">
                            <button className="btn btn-info dropdown-toggle btn-sort" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Mặc định
                                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button
                                    className="dropdown-item"
                                    onClick={() => this.sortProducts('price', -1)}
                                >Giá: Tăng dần</button>
                                <button
                                    className="dropdown-item"
                                    onClick={() => this.sortProducts('price', 1)}
                                >Giá: Giảm dần</button>
                                <button
                                    className="dropdown-item"
                                    onClick={() => this.sortProducts('name', 1)}
                                >Tên: A-Z</button>
                                <button
                                    className="dropdown-item"
                                    onClick={() => this.sortProducts('name', -1)}
                                >Tên: Z-A</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Heading;
