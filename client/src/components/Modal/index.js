import React from "react";
import Modal from "react-bootstrap/Modal";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Modal = (props) => {
  return (
    <div>
      <div className="modal-wrapper"
          style={{
              transform: props.show ? 'translateY(10vh)' : 'translateY(-100vh)',
              opacity: props.show ? '1' : '0'
          }}>
          <div className="modal-header">
              <h3>{props.title}</h3>
              <span className="close-modal-btn" onClick={props.close}>×</span>
          </div>
          <div className="modal-body">
              <p>
                  {props.children}
              </p>
          </div>
          <div className="modal-footer">
              <button className="btn-cancel" onClick={props.close}>CLOSE</button>
              <button className="btn-continue">CONTINUE</button>
          </div>
      </div>
    </div>
  );
}

export default Modal;
