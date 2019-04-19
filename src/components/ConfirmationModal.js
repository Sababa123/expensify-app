import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = (props) => (
    <Modal
        isOpen = {!!props.selected}
        contentLabel = "Selected Option"
        onRequestClose = {props.resetOnCheck}
        closeTimeoutMS = {200}
        className = "modal"
    >
        <h3 className="modal__title">Are you sure?</h3>
        <button className="button button--check" onClick={props.onRemove}>
        Yes</button>
        <button className="button button--check" onClick={props.resetOnCheck}>
        No</button>
    </Modal>
);

export default ConfirmationModal;
