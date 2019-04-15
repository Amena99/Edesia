import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Modal (props) {
  return (
    
    <div className="modal fade" id={props.id}  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
    style={{
      opacity: props.show ? '1' : '0'
    }}>
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
           <p>{props.children}
          
           </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={props.close}>Cancel</button>
            <button type="button" className="btn btn-primary" >{props.option1}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
