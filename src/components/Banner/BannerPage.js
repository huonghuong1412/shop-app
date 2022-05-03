import React, { Component } from 'react';
import './index.css'
class BannerPage extends Component {
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
            case 'list':
                title = "Danh mục sản phẩm";
                break;
            case 'search':
                title = "Tìm kiếm sản phẩm"
                break;
            default:
                title = "Tất cả sản phẩm";
                break;
        }
        var { textDetail, textBlog } = this.props;
        if (textDetail) {
            title = textDetail
        } else if (textBlog) {
            title = textBlog
        }
        return (
            <section className="bg-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="bg-banner-title">{title}</h3>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BannerPage;
