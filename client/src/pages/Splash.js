import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../services/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Checkbox } from "../components/Checkbox";
import "./Splash.css";
import {Helmet} from "react-helmet";
import {Image} from "../components/Image";
import Button from "../components/Button";
import Modal from "../components/Modal";


class Splash extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShowing: false
  };

  this.handleInputChange = this.handleInputChange.bind(this);
  };
  

  componentDidMount() {
    
  };

  openModalHandler = () => {
    this.setState({
      isShowing: true
    })
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

  };

  setCheckboxChange = event => {
    event.preventDefault();
    
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  }


  render() {
    return (
      <div>
      <Helmet>
      <style>{'body { background-color: #ec1c2a; }'}</style>
      </Helmet>
      <Container fluid id={"splashContainer"}>
        <Row fluid className2="text-center" id={"mainlogoRow"}>
          <Col size="md-12 sm-12" id={"splashCol"}>
            <Row fluid className2="text-center" id="logoRow">
              <Image 
              src="./assets/02-01-copy.jpg"
              divid="mainLogo"
              /> 
            </Row>
              
          </Col>  
        </Row>
        <Row fluid className2="text-center" id="buttonsRow">
          <Col size="md-12 sm-12">
              <Row fluid className2="text-center" id="lbuttonRow">
                <Button id="login" label="Log In" datatoggle="modal" datatarget="loginModal" />
              </Row>
              <Row fluid className2="text-center" id="sbuttonRow">
                <Button id="signup" label="Sign Up" />
              </Row>
              <Modal
                show={this.openModalHandler}
              >
              </Modal>
          </Col>
        </Row>
      </Container>

      </div>
      
    );
  }
}

export default Splash;
