import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Modal (props) {
  return (
    <div class="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
    style={{
      opacity: props.show ? '1' : '0'
    }}>
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{props.title}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
           <p>{props.children}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onClick={props.close}>Cancel</button>
            <button type="button" class="btn btn-primary" >{props.option1}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
