import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import MealPicTile from "../components/MealPicTile";
import API from "../services/API";
import Button from "react-bootstrap/Button";
import CheckoutForm from "../components/CheckoutForm";
import {Elements, StripeProvider} from 'react-stripe-elements';
import "./Splash.css";

class Purchase extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    meal: {}
    
    };

   
    this.submit = this.submit.bind(this);

  }
  
  
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log(this.props.match.params.id);
    //API call to get meal by id
    API.getMealById(this.props.match.params.id)
    .then(res => {
      console.log("in then of find by id", res)
      this.setState({
        meal: res.data
      })
    });
  }

  async submit(ev) {
    console.log("User clicked buy.");
  }
  
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 md-offset-2">
            <Jumbotron>
              <h1>
                 Purchase Page
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="lg-12 md-offset-2">
        
          <StripeProvider apiKey="pk_test_JxUthaafKzsvXPRtkVcNs2AN00jXKdRZKZ">
            <div className="example">
              <Elements>
                <CheckoutForm />
              </Elements>
            </div>
          </StripeProvider>
          </Col>
        </Row>
      
      </Container>
    );
  }
}

export default Purchase;
