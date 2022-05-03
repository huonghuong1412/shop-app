import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/HomeActions'
import { showModal, hideModal } from '../../actions/ModalActions'
import { addToCart } from '../../actions/CartActions'
import BannerPage from '../../components/Banner/BannerPage';
import SideBar from '../../components/SideBar/SideBar'
import './index.css'
import { fetchAllCommentProduct, fetchSendComment } from '../../actions/CmtProductAction';
import HomeProducts from '../../components/Products/HomeProducts';
class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openImg: true,
            quantity: 1,
            comment: '',
            nameUser: '',
            idProduct: this.props.match.params.id
        }
    }

    componentDidMount() {
        var { match } = this.props;
        var id = match.params.id;
        this.props.getProductDetail(id);
        this.props.getAllComment();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps === undefined) {
            return false;
        }
        if (this.state.idProduct !== this.props.match.params.id) {
            this.props.getProductDetail(this.props.match.params.id);
            this.setState({
                idProduct: this.props.match.params.id
            })
        }
    }


    closeModal = () => {
        this.props.hideModal();
    }

    openModalCart = (product, quantity) => {
        this.props.showModal({
            open: true,
            closeModal: this.closeModal
        }, 'alert');
        this.props.addToCart(product, quantity);
    }

    toggleImage = () => {
        this.setState({
            openImg: !this.state.openImg
        })
    }

    getImageName = () => this.state.openImg ? 'img0' : 'img1'

    handleBuyNow = (product, quantity) => {
        this.props.addToCart(product, quantity);
        this.props.history.push('/checkout')
    }

    handleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    format_curency = ((money) => {
        money = (money + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        return money + "₫";
    });

    showListImage = (imgs) => {
        if (imgs.length > 0) {
            return imgs.map((item, index) => {
                return (
                    <p key={index} style={{ textAlign: "center" }}>
                        <img src={item} alt=""></img>
                    </p>
                )
            })
        }
    }

    handleShowImage = (src) => {
        return <img src={src} alt='' className="" />
    }

    showComments = (cmts) => {
        if (cmts) {
            return cmts.map((item, index) => {
                return (
                    <div className="list__comment--info" key={index}>
                        <div className="list__comment--author">
                            <span className="list__comment--user">
                                <i className="far fa-user"></i>
                            </span>
                            <div className="list__comment--top">
                                <span className="list__comment--name">
                                    {item.nameUser}
                                </span>
                                <span className="list__comment--date">
                                    Nhận xét vào {item.date}
                                </span>
                            </div>
                        </div>
                        <span className="list__comment--text">
                            {item.comment}
                        </span>

                        {
                            item.reply ?
                                (
                                    <div className="pl-5">
                                        <div className="list__comment--author">
                                            <span className="list__comment--user">
                                                <i className="fas fa-tools"></i>
                                            </span>
                                            <div className="list__comment--top">
                                                <span className="list__comment--name">
                                                    Admin
                                                </span>
                                            </div>
                                        </div>
                                        <span className="list__comment--text" style={{ paddingLeft: '50px' }}>
                                            {item.reply}
                                        </span>
                                    </div>
                                ) : ''
                        }
                    </div>
                )
            })
        }
    }

    handleClearForm = () => {
        this.setState({
            comment: '',
            nameUser: ''
        })
    }

    handleSubmit = () => {
        var { comment, nameUser } = this.state;
        var idProduct = this.props.productItem.id;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        var date = dd + " tháng " + mm + ", " + yyyy;
        if (comment === "") {
            alert("Mời bạn nhập bình luận")
        } else if (nameUser === "") {
            alert("Mời bạn nhập họ tên")
        } else {
            this.props.sendComment({
                nameUser: nameUser,
                idProduct: idProduct,
                date: date,
                comment: comment,
                reply: ""
            })
            this.handleClearForm();
            alert("Gửi bình luận thành công")
        }
    }

    render() {
        var { productItem, listComments } = this.props;
        var textFilter = productItem.name;
        var price = this.format_curency(productItem.price)
        const imagesPath = {
            img0: productItem.img ? productItem.img[0] : '',
            img1: productItem.img ? productItem.img[1] : ''
        }
        const imageName = this.getImageName();
        var { quantity } = this.state;
        var cmtByUser = [];
        for (var i = 0; i < listComments.length; i++) {
            if (productItem.id === listComments[i].idProduct) {
                cmtByUser.unshift(listComments[i])
            }
        }
        return (
            <>
                <BannerPage textDetail={textFilter} />
                <div className="product__item--page">
                    <div className="container">
                        <div className="row">
                            <SideBar />
                            <div className="col-lg-9 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="product__item--image">
                                            <img src={imagesPath[imageName]} alt={productItem.name} className="" />
                                            <div className="slideproduct">
                                                <ul className="slides">
                                                    <li className={`slides-item ${!this.state.openImg ? 'active' : ''}`}>
                                                        <span onClick={
                                                            this.toggleImage
                                                        }>
                                                            <img src={productItem.img ? productItem.img[0] : ''} alt={productItem.name} />
                                                        </span>
                                                    </li>
                                                    <li className={`slides-item ${!this.state.openImg ? '' : 'active'}`}>
                                                        <span onClick={
                                                            this.toggleImage
                                                        }>
                                                            <img src={productItem.img ? productItem.img[1] : ''} alt={productItem.name} />
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="product__item--title">
                                            <h1>
                                                {productItem.name}
                                            </h1>
                                            <span>SKU: {productItem.sku}</span>
                                        </div>
                                        <div className="product__item--price">
                                            <span>
                                                {price}
                                            </span>
                                        </div>
                                        <div id="add-item-form" className="variants clearfix">
                                            <div className="selector-wrapper">
                                                <label>Số lượng</label>
                                                <input
                                                    id="quantity"
                                                    className="selector-wrapper-input"
                                                    type="number"
                                                    name="quantity"
                                                    min={1}
                                                    value={this.state.quantity}
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                                    <button
                                                        id="add-to-cart"
                                                        className="btn-detail btn-color-add addtocart-modal"
                                                        name="add"
                                                        onClick={() => this.openModalCart(productItem, quantity)}
                                                    >Thêm vào giỏ</button>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                                    <button
                                                        id="buy-now"
                                                        className="btn-detail btn-color-buy"
                                                        onClick={() => this.handleBuyNow(productItem, quantity)}
                                                    >Mua ngay</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="product__item--detail">
                                            <h3 className="product__item--detail-desc">MÔ TẢ SẢN PHẨM</h3>
                                            <div className="product__item--detail-wrapper">
                                                <p className="product__item--detail-name">{productItem.name}</p>
                                                <p className="product__item--detail-name">Chất liệu: {productItem.material}</p>
                                                <p className="product__item--detail-name">
                                                    Hình ảnh sản phẩm
                                                </p>
                                                {productItem.img ? this.showListImage(productItem.img) : []}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="list__comment">
                                            <h3 className="product__item--detail-desc pt-3 pb-3 mt-5 mb-4">Bình luận</h3>
                                            <div className="form-group">
                                                <textarea
                                                    required
                                                    name="comment"
                                                    rows={4}
                                                    className="form-control"
                                                    placeholder="Bình luận về sản phẩm"
                                                    value={this.state.comment}
                                                    onChange={this.handleChange}
                                                />
                                                <div className="form-comment">
                                                    <input
                                                        required
                                                        name="nameUser"
                                                        className="form-control"
                                                        placeholder="Họ và tên"
                                                        value={this.state.nameUser}
                                                        onChange={this.handleChange}
                                                    />
                                                    <button
                                                        className="btn-rb btn-send"
                                                        onClick={this.handleSubmit}
                                                    >Gửi bình luận</button>
                                                </div>

                                            </div>
                                            <div className="list__comment--content">
                                                {this.showComments(cmtByUser)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <h3 className="product__item--detail-desc pt-3 pb-3 mt-5">SẢN PHẨM KHÁC</h3>
                                        <div className="mt-5">
                                            <HomeProducts textFilter="random" />
                                        </div>
                                    </div>
                                </div>
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
        listComments: state.cmt,
        productItem: state.products.productItem,
        ...state.modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductDetail: (id) => {
            dispatch(actions.fetchAPIProductItem(id))
        },
        getAllComment: () => {
            dispatch(fetchAllCommentProduct())
        },
        sendComment: (comment) => {
            dispatch(fetchSendComment(comment))
        },
        hideModal: () => {
            dispatch(hideModal())
        },
        showModal: (modalProps, modalType) => {
            dispatch(showModal({ modalProps, modalType }))
        },
        addToCart: (product, quantity) => {
            dispatch(addToCart(product, quantity, 35))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
