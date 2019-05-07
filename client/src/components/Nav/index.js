import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light " id="navbar">
        <a class="navbar-brand mr-0 mainnavtxt" id="nav-name" href="/"><img src="https://i.imgur.com/bYGAMEj.jpg" alt="edesia logo" class="img-responsive" height="100%"></img></a>
            <button class="navbar-toggler ml-1" id="nav-toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
        <div class="navbar-collapse collapse text-right" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="navbar-nav ml-auto">
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn my-2 my-sm-0" id="search-button" type="submit">Search</button>
            </form>
            </li>
          </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" id="github_fa">
                    <a class="nav-link" href="/shoppingbasket"><i class="fa fa-shopping-basket fa-lg"></i></a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="navlink3" href="/contact" >Contact Us</a>
                </li>
            </ul>
        </div>  
</nav>

  );
}

export default Nav;
