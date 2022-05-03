import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as modalTypes from './index'

const MODAL_TYPES = {
    'alert': modalTypes.modalCart,
    'quickview': modalTypes.modalView,
}

const mapStateToProps = state => ({
    ...state.modal
})

class ModalRoot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: this.props.modalProps.open
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.modalProps.open !== this.props.modalProps.open) {
            this.setState({
                modalIsOpen: nextProps.modalProps.open
            })
        }
    }

    closeModal = () => {
        this.props.hideModal();
    }

    render() {
        if (!this.props.modalType) {
            return null
        }
        const SpecifiedModal = MODAL_TYPES[this.props.modalType]
        return (
            <Modal
                size="lg"
                centered
                show={this.state.modalIsOpen}
                onHide={this.closeModal}
            >
                <SpecifiedModal
                    hideModal={() => this.closeModal()}
                    {...this.props.modalProps}
                />
            </Modal>
        );
    }
}

export default connect(mapStateToProps, null)(ModalRoot);
