import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import MealPicTile from "../components/MealPicTile";
import API from "../services/API";
import Button from "react-bootstrap/Button";
import Nav from "../components/Nav";
import "./ShoppingBasket.css";

class ShoppingBasket extends Component {
  state = {
    meal: {}
  };

  componentDidMount() {
   let search = "Apple";
    API.searchMeals(search)
    .then(res => {
      console.log("in then of searchMeals", res)
      this.setState({
        meal: res.data
      })
    });
  }

  render() {
    return (
      <Container fluid>
       <Nav />
        <Row className2="shopping-row">
         
          <Col size="md-12">
           <h4>This page is under construction. </h4>
           <br></br>
           <img src="https://image.freepik.com/free-vector/construction-web-template-flat-style_23-2147771970.jpg" alt="construction" height="300px" width="500px"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ShoppingBasket;
