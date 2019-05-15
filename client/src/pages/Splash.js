import React, { Component } from "react";
import Geocode from "react-geocode";

import API from "../services/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
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
      eloginError: false,
      lat: 0,
      lon: 0,
      appID: "j6fSczqGs8cAjnkGBtB6",
      appCode: "SZyKi2kW8vZJrLbA__a88A",
      userZipcode: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  };

  componentDidMount () {
    this.logState();
    this.getMealsSplash();
  }

  componentDidUpdate () {
    if(!(this.state.lat === 0 && this.state.lon ===0)){
      console.log(this.state);
    }
   
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
  };

  logState = () =>{
    console.log(this.state);
  }

  handleInputChange = event => {
    console.log("Inside Handle Input Change");
    //important to use event.target
    const {value, name} = event.target;
    this.setState({
      [name]: value
    });
  };

  getGeolocation = async () => {
    if (navigator.geolocation) {
      console.log('Geolocation is supported!');
    }
    else {
      console.log('Geolocation is not supported for this Browser/OS.');
    }
    let startPos;
    var latlon = {
      lat: 0,
      lon: 0
      };
    
    const geoSuccess = async (position) => {
      startPos = await position;
      latlon.lat = await startPos.coords.latitude;
      latlon.lon = await startPos.coords.longitude;
      console.log(latlon.lat);
      console.log(latlon.lon);
      this.setState({
        lat: latlon.lat,
        lon: latlon.lon
      })
      this.getZipcode();
    };

    const getLoc = async () => {
      const latlonc =  await navigator.geolocation.getCurrentPosition(geoSuccess);
      console.log(latlonc);
    }
    await getLoc();
    // this.getZipcode();
    
  };

  getZipcode = async () => {
    console.log("Inside getZipCode");
    console.log("in gZ", this.state.lat);
    console.log("in gZ", this.state.lon);

    API.getZipcode(this.state.lat, this.state.lon, this.state.appID, this.state.appCode)
    .then(res =>{
      console.log("zipcode", res.data.Response.View[0].Result[0].Location.Address.PostalCode)
      const userZipcode = res.data.Response.View[0].Result[0].Location.Address.PostalCode;
      this.setState({
        userZipcode
      })
      this.getMealsSplash();
    } )
    .catch(err => console.log("error", err));
  }

  getMealsSplash = () => {
    if(this.state.userZipcode) {
        console.log("inside if of this.state.userZipcode")
        let zipcode = this.state.userZipcode;
        API.getMealsByLoc(zipcode)
        .then(res => {
          console.log("Inside then of getMealsbyLoc");
          console.log(res);
          this.setState({meals: res.data});
        })
        .catch(err => console.log(err))
    } else{
      console.log("inside else of this.state.userZipcode")
        API.getMealsSplash()
        .then(res => {
          this.setState({ meals: res.data });
          console.log("res.data in then of meals splash", res.data);
          console.log("inside then of Meals Splash");
        })
        .catch(err => console.log(err))
    }
  };


  

  render() {
    const userZipcode = this.state.userZipcode;
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
                    <Row fluid className="text-center" id="links-splash-row">
                    <Row fluid className="text-center" id="logoRow">
                      <Image 
                      src="./assets/02-01-copy.jpg"
                      id="mainLogo"
                      width="367px"
                      height="137px"
                      /> 
                    </Row>
                    
                  <h4 onClick={this.getGeolocation} id="show-meals-text">Show Meals Near Me <i className="fa fa-angle-double-right"></i></h4>
                 
                    <Button id="signup" className="open-modal-btn" label="Log In" onClick={this.openLoginHandler}>Log In</Button>
                    <Button id="signup" label="Sign Up" onClick={this.openSignupHandler}>Sign Up</Button>
                   
                   </Row>  
                  </Col>
                  <Col size="md-6" id="right-col" >
                  <Row id="browse-option-splash">
                  <a href="/meals">Browse all meals<i className="fa fa-angle-double-right"/></a>
                  </Row>
                  {this.state.meals.map(meal => (
                    <Row id="meal-row">
                      <img src={meal.photo_URL} height={"165px"} width={"200px"} class="splash-meal-img"></img>
                    <Card className="border-0 border-dark" style={{width: '18rem'}}>
                      <Card.Body>
                        <Card.Title>{meal.name}</Card.Title>
                        <Card.Text>
                          {meal.description}
                          <p className="time-avail-text">Available by {meal.time_available} today.</p>
                         <p className="time-avail-text"> Serving Zipcode: {userZipcode ? `${this.state.userZipcode}`: `${meal.zipcode1}`} </p>
                        </Card.Text> 
                        
                      </Card.Body>
                    </Card>
                    <Link to={"/meals/" + meal.id}><i className="	fa fa-angle-double-right fa-5x" id="right-arrows"></i></Link>
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
