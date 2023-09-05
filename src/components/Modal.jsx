import React, {useContext} from "react";
import {FaTimes} from 'react-icons/fa';
import { AppContext } from "./Context";

const Modal = () => {

    const {toggleModal, toggleModalHandler} = useContext(AppContext);
    return(
        <div className={`${toggleModal ? (
            'modal-overlay show-modal'
        ): (
            'modal-overlay'
        )}`}>
            <div className="modal-container">
                <h3>modal content</h3>
                <button className="close-modal-btn" onClick={toggleModalHandler}>
                    <FaTimes />
                </button>
            </div>
        </div>
    );
};

export default Modal;