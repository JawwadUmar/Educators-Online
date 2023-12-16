import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';

const Modal = ({ open, close, title, message }) => {
  
  React.useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className="modal">
        <div className="modal-overlay" onClick={close}></div>
        <div className="modal-content">
          <h2>{title}</h2>
          <p>{message}</p>
          <button className="close-modal" onClick={close}>
            Ok
          </button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
