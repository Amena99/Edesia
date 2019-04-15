import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SplashModal = (props) => {
  return (
  // <Modal show={props.show} onHide={props.handleClose}>
  //   <Modal.Header closeButton>
  //     <Modal.Title>{props.title}</Modal.Title>
  //   </Modal.Header>

  //   <Modal.Body>
  //     <p>{props.children}</p>
  //   </Modal.Body>

  //   <Modal.Footer>
  //     <Button variant="secondary">Close</Button>
  //     <Button variant="primary">{props.option1}</Button>
  //   </Modal.Footer>
  // </Modal>



    // <div>
    //   <div className="modal-wrapper"
    //       style={{
    //           transform: props.show ? 'translateY(10vh)' : 'translateY(-100vh)',
    //           opacity: props.show ? '1' : '0'
    //       }}>
    //       <div className="modal-header">
    //           <h3>{props.title}</h3>
    //           <span className="close-modal-btn" onClick={props.close}>×</span>
    //       </div>
    //       <div className="modal-body">
    //           <p>
    //               {props.children}
    //           </p>
    //       </div>
    //       <div className="modal-footer">
    //           <button className="btn-cancel" onClick={props.close}>CLOSE</button>
    //           <button className="btn-continue">CONTINUE</button>
    //       </div>
    //   </div>
    // </div>
  );
}

export default SplashModal;
