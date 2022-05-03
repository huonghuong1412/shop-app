import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/HomeActions'
import { showModal, hideModal } from '../../actions/ModalActions'
import { addToCart } from '../../actions/CartActions'
import ModalRoot from '../Modal/ModalRoot';
import Heading from './Heading';
import ClipLoader from "react-spinners/ClipLoader";
const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
}
const styleDiv = {
    width: "100%"
}


class HomeProducts extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: '',
            sortValue: 0
        }
    }

    componentDidMount() {
        this.props.getListProduct();
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

    sortProducts = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        })
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

    showProductItem = (products, textFilter) => {
        if (products.length > 0) {
            var productsTmp;
            switch (textFilter) {
                case 'All':
                    productsTmp = products.slice(0, 8);
                    break;
                case 'Giày':
                    productsTmp = products.filter(product => {
                        return product.category === 'giay'
                    }).slice(0, 8)
                    break;
                case 'all':
                    productsTmp = products
                    break;
                case 'ao-khoac':
                    productsTmp = products.filter(product => {
                        return product.category === 'ao-khoac'
                    })
                    break;
                case 'ao':
                    productsTmp = products.filter(product => {
                        return product.category === 'ao'
                    })
                    break;
                case 'quan':
                    productsTmp = products.filter(product => {
                        return product.category === 'quan'
                    })
                    break;
                case 'vay-dam':
                    productsTmp = products.filter(product => {
                        return product.category === 'vay-dam'
                    })
                    break;
                case 'bo-mac-nha':
                    productsTmp = products.filter(product => {
                        return product.category === 'bo-mac-nha'
                    })
                    break;
                case 'giay':
                    productsTmp = products.filter(product => {
                        return product.category === 'giay'
                    })
                    break;
                case 'tui-xach':
                    productsTmp = products.filter(product => {
                        return product.category === 'tui-xach'
                    })
                    break;
                case 'random':
                    
                    productsTmp = [
                        products[Math.floor(Math.random() * products.length)],
                        products[Math.floor(Math.random() * products.length)],
                        products[Math.floor(Math.random() * products.length)],
                        products[Math.floor(Math.random() * products.length)],
                    ]
                    break;
                default:
                    productsTmp = []
                    break;
            }
            return (
                productsTmp.map((item, index) => {
                    var name = this.removeVietnameseTones(item.name);
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
            )
        }
    }

    render() {
        var { products, textFilter, match, isFetching } = this.props;
        var result = null;
        var { sortBy, sortValue } = this.state;
        if (sortBy === "name") {
            products = products.sort((a, b) => {
                if (a.name > b.name) return sortValue;
                else if (a.name < b.name) return -sortValue;
                else return 0;
            })
        } else if (sortBy === 'price') {
            products = products.sort((a, b) => {
                if (a.price > b.price) return -sortValue;
                else if (a.price < b.price) return sortValue;
                else return 0;
            })
        }

        if (match) {
            return (
                <>
                    {
                        isFetching ? (
                            <ClipLoader
                                size={150}
                                color={"#123abc"}
                                css={override}
                                loading={isFetching}
                            />
                        ) : (
                                <>
                                    <div className="main__content-products" style={styleDiv}>
                                        {result}
                                        <Heading
                                            textHeading={textFilter}
                                            sortValue={sortValue}
                                            sortBy={sortBy}
                                            sortProducts={this.sortProducts}
                                        />
                                        <div className="col-12">
                                            <div className="row products__list">
                                                {this.showProductItem(products, textFilter)}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                    }
                    <ModalRoot hideModal={this.props.hideModal} />
                </>
            );
        } else {
            return (
                <>
                    { isFetching ? (
                        <ClipLoader
                            size={150}
                            color={"#123abc"}
                            css={override}
                            loading={isFetching}
                        />
                    )
                        : (
                            <div className="row products__list">
                                {result}
                                {this.showProductItem(products, textFilter)}
                            </div>
                        )
                    }
                    <ModalRoot hideModal={this.props.hideModal} />
                </>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.listProduct,
        ...state.modal,
        isFetching: state.products.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListProduct: () => {
            dispatch(actions.fetchAPIALLProduct())
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeProducts);
