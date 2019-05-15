import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../services/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Checkbox } from "../components/Checkbox";
import {MealTile } from "../components/MealTile";

class MealListing extends Component {
  constructor(props){
    super(props);

    this.state = {
    meals: [],
    searchQuery: "lunch"
     
    }
  }
  
  componentDidMount() {
    // this.loadMeals();
  }

  loadMeals = () => {
    
    API.getMeals()
      .then(res =>{
          this.setState({ meals: res.data });
          console.log("inside then of get Meals");
          this.logState();
      })
      .catch(err => console.log("loggin error", err));
  };

  logState= () => {
    console.log(this.state.meals);
  }

  navMealDetail= () => {
    console.log("logging clicked meal id", this.id);
  };

  searchMeals = ()=>{
    console.log("inside search Meals");
    let searchQuery = this.state.searchQuery;
    console.log("searchQuery", searchQuery);
    API.searchMeals(searchQuery)
    .then(res=>{
      console.log("Inside then of searchMeals")
      console.log("res of searchMeals", res);
    }).catch(err => console.log("err is searchMeals",err));

  }

  render() {
    return (
     
      <div className='bg-color' 
      style={{backgroundColor: '#ec1c2a'}}>
            <Nav onClick={this.searchMeals}/>
            <Container>
            <Row>
                {this.state.meals.map(meal => (
                  <Col size="md-4">
                    <Link to={"/meals/" + meal.id}>
                      <MealTile
                          id={meal.id}
                          title={meal.name}
                          date={meal.time_available}
                          photo_url={meal.photo_URL}
                          type={meal.type}
                          onClick={this.navMealDetail}
                        />
                    </Link>
                  </Col>
                ))}
          </Row>
      </Container>
    </div>
    );
  }
}

export default MealListing;
