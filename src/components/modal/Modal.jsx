import React from 'react'
import './Modal.css'

const Modal = ({open, close, title, message}) => {
  if(!open){
    return null;
  }

  return (
    <>
    <div className="modal">
    <div className="modal-overlay" onClick={close}></div>
    <div className="modal-content">
    <h2>{title}</h2>
    <p>{message}</p>
    <button className='close-modal'
    onClick={close}>Ok</button>
    </div>
    </div>
    </>
  )
}

export default Modal