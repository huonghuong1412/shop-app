import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/HomeActions'
import BannerPage from '../../components/Banner/BannerPage';

const listImg = [
    "https://file.hstatic.net/1000239816/file/enda-giay-the-thao-nu-luoi-bo-thoang-cao-5cm-1_21929cf58da14b0aa2cc5782eeced72c_grande.jpg",
    "https://product.hstatic.net/1000239816/product/bo-mac-nha-cotton-lua-hong-nhun-tay-ao_4d2978d892f147ccbfc1e38828172b97_large.jpg",
    "https://product.hstatic.net/1000239816/product/enda-tui-hop-thu-cam-tay-deo-cheo_5c96e82bcecb461583a400dc5d0d2fb1_large.jpg",
    "https://file.hstatic.net/1000239816/file/enda-ao-so-mi-cotton-co-v-phoi-mau_b77365645d87449198a0c22dbf1e259a_grande.jpg",
    "https://file.hstatic.net/1000239816/file/dam-linen-hoa-van-dang-suong3_0b44663861014393bdaedc2f50a89a38_grande.jpg",
    "https://file.hstatic.net/1000239816/file/enda-giay-the-thao-nu-luoi-thoang-juku_cb74bf7d11954171834ca988ce994e39_grande.jpg",
    "https://file.hstatic.net/1000239816/file/enda-quan-jean-harem-gau-in-chu_ac655df1e2cd46928b86fcc84042e245_grande.jpg",
    "https://file.hstatic.net/1000239816/file/enda-ao-khoac-len-det-kim-co-non-retro-soc-1_c4940fe2ed4442cf868689c966794b58_grande.jpg"
]

const listTitle = [
    "Tất cả sản phẩm",
    "Bộ mặc nhà",
    "Túi xách",
    "Áo",
    "Váy đầm",
    "Giày",
    "Quần",
    "Áo khoác"
]

class AllProductsPage extends Component {

    componentDidMount() {
        this.props.getListProduct();
    }

    countProducts = (categories) => {
        var products = this.props.products;
        var productTmp;
        if (products) {
            switch (categories) {
                case 'all':
                    productTmp = products;
                    break;
                case 'ao-khoac':
                    productTmp = products.filter(product => {
                        return product.category === 'ao-khoac'
                    });
                    break;
                case 'ao':
                    productTmp = products.filter(product => {
                        return product.category === 'ao'
                    });
                    break;
                case 'quan':
                    productTmp = products.filter(product => {
                        return product.category === 'quan'
                    });
                    break;
                case 'vay-dam':
                    productTmp = products.filter(product => {
                        return product.category === 'vay-dam'
                    });
                    break;
                case 'bo-mac-nha':
                    productTmp = products.filter(product => {
                        return product.category === 'bo-mac-nha'
                    });
                    break;
                case 'giay':
                    productTmp = products.filter(product => {
                        return product.category === 'giay'
                    });
                    break;
                case 'tui-xach':
                    productTmp = products.filter(product => {
                        return product.category === 'tui-xach'
                    });
                    break;
                default:
                    productTmp = []
                    break;
            }
        }
        return productTmp.length;
    }

    showListCategory = (categories) => {
        if (categories.length > 0) {
            return categories.map((item, index) => {
                return (
                    <div className="col-lg-3 col-md-3 col-sm-6 col-no-padding" key={index}>
                        <div className="products__item">
                            <div className="products__item--img">
                                <Link to={`/collections/${item}`}>
                                    <img src={listImg[index]} alt='' />
                                </Link>
                            </div>
                            <div className="products__item--info">
                                <h3 className="products__item--info-name">
                                    <Link to={`/collections/${item}`} className="products__item--info-link">
                                        {listTitle[index]}
                                    </Link>
                                </h3>
                                <p className="products__item--info-price">
                                    {this.countProducts(item)} sản phẩm
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        var listCategory = ['all', 'bo-mac-nha', 'tui-xach', 'ao', 'vay-dam', 'giay', 'quan', 'ao-khoac'];
        return (
            <>
                <BannerPage textHeading="list" />
                <div className="all_page pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            {this.showListCategory(listCategory)}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.listProduct,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListProduct: () => {
            dispatch(actions.fetchAPIALLProduct())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage);
