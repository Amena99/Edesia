import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Checkbox } from "../components/Checkbox";
import "../App.css"

class Splash extends Component {
  constructor(props){
    super(props);
    this.state = {
   
  };

  this.handleInputChange = this.handleInputChange.bind(this);
  }
  

  componentDidMount() {
    
  }

  loadBooks = () => {
  
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
      <Container fluid id={"splashContainer"}>
        <Row id={"splashRow"}>
          <Col size="md-6 sm-12" id={"splashCol"}>
          </Col>
          <Col size="md-6 sm-12">
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Splash;
