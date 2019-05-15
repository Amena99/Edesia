import React, { Component } from "react";
import "./MealListing.css";
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
    searchQuery: null
    }
  }
  
  componentDidMount() {
    this.loadMeals();
  }

  loadMeals = () => {
    if(!(this.state.searchQuery === null)){
      this.searchMeals();
    }
    // }else{
    //    API.getMeals()
    //   .then(res => {
    //       this.setState({ 
    //         meals: res.data,
    //       });
    //       console.log("inside then of get Meals");
    //       this.logState();
    //   })
    //   .catch(err => console.log("loggin error", err));
    // }
   
  };

  logState= () => {
    console.log("this.logstate", this.state);
  }
  
  handleInputChange = event => {
    console.log("inside handle Input change")
    
    this.setState({ searchQuery: event.target.value });
  };

  // searchQueryFunc = (searchQuery) =>{
  //     const searchQ = searchQuery;
  //     this.setState({
  //       searchQuery: searchQ
  //     })
  // }

  handleFormSubmit = ()=> {
    console.log("inside search Meals");
    let searchQuery = this.state.searchQuery;
    console.log("searchQuery", searchQuery);

    API.searchMeals(searchQuery)
    .then(res => {
      console.log("Inside then of searchMeals")
      console.log(res.data);
      this.setState({ 
        meals: res.data
        // searchQuery: null  
      });
      this.logState();
    }).catch(err => console.log("err in searchMeals",err));
  }

  render() {
    return (
     
      <div className='bg-color' 
        style={{backgroundColor: '#f6f6f6'}}>
            <Nav handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />
            <Container>
            
              {this.state.meals && !(this.state.meals.length===0) ? (
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
                ): (
                <Row id="row-sorry-text">
                  <h6 id="sorry-search-text">Sorry, that search did not bring back any results. 
                    <br></br>
                    Please try searching for a meal name, meal type, or meal description.
                  </h6>
                </Row>
                  )}
                
        
      </Container>
    </div>
    );
  }
}

export default MealListing;
