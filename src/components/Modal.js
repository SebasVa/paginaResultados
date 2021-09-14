import React from 'react';
import '../styles/Modal.css';
import { Button } from 'antd';
import '../styles/App.css';
const Modal = ({isOpen, closeModal, title, children}) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className = {`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className ="modal_dialog" onClick={handleModalDialogClick}>
                <h1>
                     {title}
                </h1>
                {children}
                <Button onClick={closeModal}>
                    Cerrar ventana
                </Button>
            </div>   
        </div>
    )
}

export default Modal
