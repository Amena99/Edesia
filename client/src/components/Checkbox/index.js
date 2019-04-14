import React from "react";
import "./style.css";

//This file exports the checkbox
export function Checkbox(props){
    return(
        
        <div className="form-check">
            <input className="form-check-input" type={props.type} name={props.name} value={props.value}></input>
                <label className="form-check-label" for={props.name}>
                {props.label}
                </label>
        </div>
    );
}
