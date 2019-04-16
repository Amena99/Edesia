import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../services/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Checkbox } from "../components/Checkbox";

class MealListing extends Component {
  constructor(props){
    super(props);
    this.state = {
    meals: []
    
  };

  this.handleInputChange = this.handleInputChange.bind(this);
  }
  

  componentDidMount() {
    this.loadMeals();
  }

  loadMeals = () => {
    
    API.getMeals()
      .then(res =>{
          this.setState({ meals: res.data });
          console.log("inside then of get Meals");
      }
      
      )
      .catch(err => console.log("loggin error", err));

      console.log(this.state.meals);
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

    console.log(this.state.name);
    console.log(this.state.description);
    console.log(this.state.photoURL);
    console.log(this.state.allergen_dairy);
    console.log(this.state.allergen_treenuts);
    console.log(this.state.allergen_peanuts);
    console.log(this.state.allergen_wheat);
    console.log(this.state.allergen_fish);
    console.log(this.state.allergen_crustaceanshellfish);
    console.log(this.state.allergen_eggs);
    console.log(this.state.allergen_soya);
    console.log(this.state.time_available);
    console.log(this.state.quantity);
    console.log(this.state.catererId);
   

   

    // if (this.state.name && this.state.catererId) {
    //   API.saveMeal({
    //     name: this.state.title,
    //     type: this.state.type,
    //     description: this.state.description
        
  
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
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
      <Container fluid>
        <Row>
          <Col size="md-6">
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
              value={1}
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
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Meals On My List</h1>
            </Jumbotron>
            {this.state.meals.length ? (
              <List>
                {this.state.meals.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MealListing;
