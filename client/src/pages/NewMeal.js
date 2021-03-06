import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../services/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Checkbox } from "../components/Checkbox";
import {MealTile } from "../components/MealTile";

class NewMeal extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      description: "",
      photoURL: "",
      allergen_dairy: false,
      allergen_treenuts: false,
      allergen_peanuts: false,
      allergen_wheat: false,
      allergen_fish: false,
      allergen_crustaceanshellfish: false,
      allergen_eggs: false,
      allergen_soya: false,
      time_available: "",
      quantity: "",
      catererId: ""
    }
    
    

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.navMealDetail = this.navMealDetail.bind(this);
  }
  

  componentDidMount() {
    this.loadMeals();
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
    // window.location.replace(`http://localhost:3000/meals/${this.id}`)
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    console.log("Inside handle input chage");
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log("even target value", value);
   
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // console.log(this.state.name);
    // console.log(this.state.description);
    // console.log(this.state.photoURL);
    // console.log(this.state.allergen_dairy);
    // console.log(this.state.allergen_treenuts);
    // console.log(this.state.allergen_peanuts);
    // console.log(this.state.allergen_wheat);
    // console.log(this.state.allergen_fish);
    // console.log(this.state.allergen_crustaceanshellfish);
    // console.log(this.state.allergen_eggs);
    // console.log(this.state.allergen_soya);
    // console.log(this.state.time_available);
    // console.log(this.state.quantity);
    // console.log(this.state.catererId);
    console.log(this.state);
    let newMeal = {
      name: this.state.name,
      description: this.state.description,
      photoURL: this.state.photoURL,
      allergen_dairy: this.state.allergen_dairy,
      allergen_treenuts: this.state.allergen_treenuts,
      allergen_peanuts: this.state.allergen_peanuts,
      allergen_wheat: this.state.allergen_wheat,
      allergen_fish: this.state.allergen_fish,
      allergen_crustaceanshellfish: this.state.allergen_crustaceanshellfish,
      allergen_eggs: this.state.allergen_eggs,
      allergen_soya: this.state.allergen_soya,
      time_available: this.state.time_available,
      quantity: this.state.quantity
      
    }
    console.log(newMeal);

    API.saveMeal(newMeal)
    .then(res => {
      console.log("Saved Meal.")
      console.log(res);
    })
    .catch(err => console.log(err));
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
     
      <div className='bg-color' 
      style={{backgroundColor: '#ec1c2a'}}>
            <Jumbotron>
              <h1>Meals On My List</h1>
            </Jumbotron>
            <Container>
          <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Enter Details to Add New Meal:</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Meal Name (required)"
              />
              <Input
                value={this.state.type}
                onChange={this.handleInputChange}
                name="type"
                placeholder="Breakfast/Lunch/Dinner? (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
               <Input
                value={this.state.quantity}
                onChange={this.handleInputChange}
                name="quantity"
                placeholder="Quantity (required)"
              />
              <Input
                value={this.state.catererId}
                onChange={this.handleInputChange}
                name="catererId"
                placeholder="Caterer ID (required)"
              />
              <Input
                value={this.state.photoURL}
                onChange={this.handleInputChange}
                name="photoURL"
                placeholder="Photo URL"
              />
             <Checkbox 
              type="checkbox"
              checked={this.state.allergen_peanuts}
              label={"Peanuts"}
              name={"allergen_peanuts"}
              // value={true}
              onChange={this.handleInputChange}
              id={"peanuts"}
              />
              
              <FormBtn
                disabled={!(this.state.name && this.state.catererId)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
        
        </Row>
      </Container>
    </div>
    );
  }
}

export default NewMeal;
