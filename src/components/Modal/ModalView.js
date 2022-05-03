import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../../actions/HomeActions'
import { Modal } from 'react-bootstrap'
import { addToCart } from '../../actions/CartActions'
import { Link } from 'react-router-dom';

class ModalView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: this.props.modalProps.open,
            size: 35
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.modalProps.open !== this.props.modalProps.open) {
            this.setState({
                modalIsOpen: nextProps.modalProps.open
            })
        }
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

    closeModal = () => {
        this.props.hideModal();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addToCart = (product, size) => {
        this.props.addToCart(product, size);
        alert("Thêm vào giỏ hàng thành công!")
    }

    render() {
        var { product } = this.props;
        var { size } = this.state;
        return (
            <>
                <Modal.Header>
                    <Modal.Title>
                        {product.name}
                    </Modal.Title>
                    <button
                        type="button"
                        className="close-header"
                        onClick={this.closeModal}
                    >
                        <i className="fa fa-times mr-3"></i>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="quickview-image">
                                <img src={product.img[0]}
                                    alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div id="form-quickview">
                                <div className="quickview-info">
                                    <div className="quickview-price">
                                        <span>{this.format_curency(product.price)}</span>
                                    </div>
                                    <div className="selector-wrapper">
                                        <label>Kích thước</label>
                                        <select className="single-option-selector" id="quickview-select-option-0" name="size" onChange={this.handleChange}>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-input mt-3">
                                    <label>Số lượng</label>
                                    <input
                                        id="quantity-quickview"
                                        name="quantity"
                                        type="number" min="1" defaultValue="1" />
                                </div>
                                <div className="form-input form-add">
                                    <Link to='/cart' className="btn-detail btn-color-add btn-min-width btn-mgt btn-addcart" onClick={() => {
                                        this.addToCart(product, size)
                                    }}>
                                        Thêm vào giỏ
                                    </Link>
                                    <div className="qv-readmore">
                                        <span> hoặc </span>
                                        <Link to="#" className="read-more">Xem chi tiết</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.modal,
        productItem: state.productItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product, size) => {
            dispatch(addToCart(product, 1, size))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalView);
