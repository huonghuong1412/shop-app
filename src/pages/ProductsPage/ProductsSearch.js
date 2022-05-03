import React, { Component } from 'react';
import { connect } from 'react-redux';
import BannerPage from '../../components/Banner/BannerPage'
import { addToCart } from '../../actions/CartActions'
import { fetchAPIALLProduct, fetchAPISearchProduct } from '../../actions/HomeActions'
import { Link } from 'react-router-dom';
import { hideModal, showModal } from '../../actions/ModalActions';
import ModalRoot from '../../components/Modal/ModalRoot';
class ProductsSearch extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.match.params.text
        }
    }

    componentDidMount() {
        this.props.searchListProducts(this.props.match.params.text);
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevProps === undefined) {
            return false;
        }
        if(this.state.name !== this.props.match.params.text) {
            this.props.searchListProducts(this.props.match.params.text);
            this.setState({
                name: this.props.match.params.text
            })
        }
    }

    closeModal = () => {
        this.props.hideModal();
    }

    openModalCart = (product) => {
        this.props.showModal({
            open: true,
            closeModal: this.closeModal
        }, 'alert');
        this.props.addToCart(product);
    }

    openQuickView = (product) => {
        this.props.showModal({
            open: true,
            closeModal: this.closeModal,
            product: product
        }, 'quickview');
    }

    removeVietnameseTones(str) {
        return str.toLowerCase().normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .split(' ').join('-');
    }

    format_curency = ((money) => {
        money = money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        return money + "₫";
    });

    showListSearch = (products) => {
        if (products.length > 0) {
            return products.map((item, index) => {
                var name = this.removeVietnameseTones(item.name)
                var price = this.format_curency(item.price);
                return (
                    <div className="col-lg-3 col-md-3 col-sm-6 col-no-padding" key={index}>
                        <div className="products__item">
                            <div className="products__item--img">
                                <Link to={`/products/${item.id}/${name}`} target={this.props.target}>
                                    <img src={item.img[0]} alt={item.img[0]} />
                                </Link>
                                <div className="products__item--actions">
                                    <div className="products__item--actions-cart">
                                        <button
                                            type="button"
                                            className="products__item--actions-link"
                                            onClick={() => this.openModalCart(item)}
                                        >
                                            <i className="fa fa-shopping-bag"></i>
                                        </button>
                                    </div>
                                    <div className="products__item--actions-detail">
                                        <Link to={`/products/${item.id}/${name}`} className="products__item--actions-link">
                                            <i className="far fa-clone"></i>
                                        </Link>
                                    </div>
                                    <div className="products__item--actions-quick">
                                        <button
                                            className="products__item--actions-link"
                                            onClick={() => this.openQuickView(item)}
                                        >
                                            <i className="fa fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="products__item--info">
                                <h3 className="products__item--info-name">
                                    <Link to={`/products/${item.id}/${name}`} className="products__item--info-link">
                                        {item.name}
                                    </Link>
                                </h3>
                                <p className="products__item--info-price">
                                    {price}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        var { products } = this.props;
        return (
            <>
                <BannerPage textHeading="search" />
                <div className="search__page pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className='col-12'>
                                <h1 className="search__products--title">
                                    Trang tìm kiếm
                                </h1>
                                <h3 className="search__products--text mt-3 mb-5">
                                    Có {products.length > 0 ? products.length : 0} kết quả tìm kiếm phù hợp
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            {this.showListSearch(products)}
                        </div>
                    </div>
                </div>
                <ModalRoot hideModal={this.props.hideModal} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.listProduct,
        cart: state.cart,
        ...state.modal,
        isFetching: state.products.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchListProducts: (textSearch) => {
            dispatch(fetchAPISearchProduct(textSearch))
        },
        getAllProducts: () => {
            dispatch(fetchAPIALLProduct())
        },
        hideModal: () => {
            dispatch(hideModal())
        },
        showModal: (modalProps, modalType) => {
            dispatch(showModal({ modalProps, modalType }))
        },
        addToCart: (product) => {
            dispatch(addToCart(product, 1, 35))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSearch);
