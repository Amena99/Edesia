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
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Card} from "react-bootstrap"; 


class Splash extends Component {
  constructor(){
    super();
   

    this.state = {
      meals: [],
      isShowing: false,
      login: false,
      signup: false,
      eloginEmail: "",
      eloginPassword: "",
      eloginError: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  };

  componentDidMount () {
    this.getMealsSplash();
  }

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

  getGeolocation = () => {
    if (navigator.geolocation) {
      console.log('Geolocation is supported!');
    }
    else {
      console.log('Geolocation is not supported for this Browser/OS.');
    }
    let startPos;
    const geoSuccess = function(position) {
    startPos = position;
    console.log(startPos.coords.latitude);
    console.log(startPos.coords.longitude);
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };

  getMealsSplash = () => {
    // this.state.coords ? (
    //   API.getMealsByLoc
    //   ) : (
      API.getMealsSplash()
      .then(res => {
        this.setState({ meals: res.data });
        console.log(res.data);
        console.log("inside then of Meals Splash");
      })
      .catch(err => console.log(err));
  };
  

  render() {
    return (
      <div>
      <Helmet>
      <style>{'body { background-color: #ec1c2a; }'}</style>
      </Helmet>
      <Container fluid id={"splashContainer"}>
        {/* <Row fluid className2="text-center" id={"mainlogoRow"}>
          <Col size="md-6 sm-12" id={"splashCol"}>
            
          </Col>   */}
     
        {/* <Row fluid className2="text-center" id="buttonsRow">
          <Col size="md-12 sm-12">
             
          {/* </Col> */}
        {/* </Row> */}
        {/* <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null } */}

                <Row className="text-center" id="lbuttonRow">
                  <Col size="md-6" >
                    <Row fluid className="text-center" id="logoRow">
                      <Image 
                      src="./assets/02-01-copy.jpg"
                      divid="mainLogo"
                      /> 
                    </Row>
                    <h4 onClick={this.getGeolocation} id="show-meals-text">Show Meals Near Me <i class="fa fa-angle-double-right"></i></h4>
                    <Button id="signup" className="open-modal-btn" label="Log In" onClick={this.openLoginHandler}>Log In</Button>
                    <Button id="signup" label="Sign Up" onClick={this.openSignupHandler}>Sign Up</Button>
                  </Col>
                  <Col size="md-6" id="right-col" >
                  
                  {this.state.meals.map(meal => (
                    <Row>
                      <img src={meal.photo_URL}></img>
                    <Card style={{width: '18rem'}}>
                      <Card.Body>
                        <Card.Title>{meal.name}</Card.Title>
                        <Card.Text>
                          {meal.description}
                          <i class="fa fa-angle-double-right"></i>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    {/* <div>
                    <i class="fa fa-angle-double-right"></i>
                    </div> */}
                  </Row>  
                ))}
                   
                  </Col>
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
