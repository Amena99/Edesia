import React from "react";
import "./style.css";
import { PromiseProvider } from "mongoose";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " id="navbar">
        <a className="navbar-brand mr-0 mainnavtxt" id="nav-name" href="/"><img src="https://i.imgur.com/bYGAMEj.jpg" alt="edesia logo" className="img-responsive" height="100%"></img></a>
            <button className="navbar-toggler ml-1" id="nav-toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>
        <div className="navbar-collapse collapse text-right" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="navbar-nav ml-auto">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn my-2 my-sm-0" id="search-button" type="submit" onClick={props.onClick}>Search</button>
            </form>
            </li>
          </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item" id="github_fa">
                    <a className="nav-link" href="/shoppingbasket"><i className="fa fa-shopping-basket fa-lg"></i></a> 
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="navlink3" href="/contact" >Contact Us</a>
                </li>
            </ul>
        </div>  
</nav>

  );
}

export default Nav;
