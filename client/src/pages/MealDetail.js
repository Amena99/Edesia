import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import MealPicTile from "../components/MealPicTile";
import API from "../services/API";
import Button from "react-bootstrap/Button";

class MealDetail extends Component {
  constructor(props){
    super(props);
    
    this.state = {
        meal: {}
      };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
  handleFormSubmit(event) {
    event.preventDefault();
    console.log("In handle Form Submit",this.props.match.params.id);
    API.addToCart(this.props.match.params.id)
    .then(res => {
      console.log("in then of addtoCart")
      console.log("logging res addTC", res);
    })
  }

  render() {
    return (
      <Container fluid>
        
        <Row>
          <Col size="lg-4 md-offset-2">
          <MealPicTile
          photo_url={this.state.meal.photo_URL}
          title={this.state.meal.name}
          >
          </MealPicTile>
         
          </Col>
       
          <Col size="lg-8 md-offset-2">
           <h4>{this.state.meal.name}</h4>
           <br></br>
           <p>{this.state.meal.description}</p>
           <p>{this.state.meal.type}</p>
           <p>Get it by: {this.state.meal.time_available}</p>
           <p>${this.state.meal.plateprice} / plate</p>
           <Button variant="danger" onClick={this.handleFormSubmit}>BUY</Button>
           {/* href={`/purchase/${this.state.meal.id}`} */}
           <br></br>
           <p>{this.state.meal.quantity} plates left </p>
           <p>allergens</p>
           </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <h3>Meal Description</h3>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default MealDetail;
