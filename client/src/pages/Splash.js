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
// import Button from "../components/Button";
// import SplashModal from "../components/SplashModal";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Splash extends Component {
  constructor(){
    super();
   

    this.state = {
      isShowing: false,
      login: false,
      signup: false,
      eloginEmail: "",
      eloginPassword: "",
      eloginError: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  };

  openLoginHandler = () => {
    console.log("Inside openLoginHandler");
    this.setState({
      isShowing: true,
      login: true
    })
  };

  openSignupHandler = () => {
    console.log("Inside openSignupHandler");
    this.setState({
      isShowing: true,
      signup:true
    })
  };

  closeModalHandler = () => {
    console.log("Inside CloseModalHandler");
    this.setState({
      isShowing: false,
      login: false,
      signup: false
    })
  };

  processEdesiaLogin = ()=> {
    console.log(this.state.eloginEmail);
    console.log(this.state.eloginPassword);
    
    if (this.state.eloginEmail === "edesia@gmail.com" && this.state.eloginPassword === "mealtime"){
      window.location.replace("http://localhost:3000/meals")
    }else{
      this.setState({
        eloginError: true
      })
    }
    this.clearELoginState();
  };

  clearELoginState = ()=>{
    this.setState({
      eloginEmail: "",
      eloginPassword: ""
    })
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    console.log("Inside Handle Input Change");
    
    //important to use event.target
    const {value, name} = event.target;

    this.setState({
      [name]: value
    });
    
  };

  handleFormSubmit = event => {
    // event.preventDefault();

  };

  setCheckboxChange = event => {
    // event.preventDefault();
    // const { name, value } = event.target;
    // this.setState({
    //   [name]: value
    // });

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
        {/* <Row fluid className2="text-center" id="buttonsRow">
          <Col size="md-12 sm-12">
             
          {/* </Col> */}
        {/* </Row> */}
        {/* <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null } */}

                <Row fluid className2="text-center" id="lbuttonRow">
                 <Button id="signup" className="open-modal-btn" label="Log In" onClick={this.openLoginHandler}>Log In</Button>
                </Row>
                <Row fluid className2="text-center" id="sbuttonRow">
                <Button id="signup" label="Sign Up" onClick={this.openSignupHandler}>Sign Up</Button>
                </Row>
               <Modal
                    className="modal"
                    id="loginModal"
                    show={this.state.login}
                    onHide={this.closeModalHandler}
                    title={"Log In"}>
                      <h4>Edesia LogIn</h4>
                        <Form>
                          <Form.Group controlId="formGroupEmail">
                            <Form.Label>Username (Your email address)</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="email" 
                            value={this.state.eloginEmail}
                            name="eloginEmail"
                            onChange={this.handleInputChange}
                            />
                          </Form.Group>
                          <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="password" 
                            value={this.state.eloginPassword}
                            name="eloginPassword"
                            onChange={this.handleInputChange}
                            />
                          </Form.Group>
                        </Form>
                        {this.state.eloginError ? <div><p id="edesialoginError">Oops! It looks like your username/password was incorrect! Please try again. </p></div> : null}
                        <Button variant="primary" type="submit" onClick={this.processEdesiaLogin}>
                          Log In
                        </Button>
                </Modal>
                <Modal
                    className="modal"
                    id="signupModal"
                    show={this.state.signup}
                    onHide={this.closeModalHandler}
                    title={"Sign Up"}>
                       Your Name:
                       Password:
                </Modal> 
             {/* </div> */}
            {/* <SplashModal>
              show={this.state.login}
              handleClose={this.closeModalHandler}
            </SplashModal> */}
            {/* <Modal show={this.state.login} onHide={this.closeModalHandler}>
              <Modal.Header closeButton>
                <Modal.Title>Title</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>body</p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Login</Button>
              </Modal.Footer>
            </Modal> */}

      </Container>

      </div>
      
    );
  }
}

export default Splash;
