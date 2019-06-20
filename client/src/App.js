import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MealListing from "./pages/MealListing";
import MealDetail from "./pages/MealDetail";
import Purchase from "./pages/Purchase";
import Splash from "./pages/Splash";
import NewMeal from "./pages/NewMeal";
import ShoppingBasket from "./pages/ShoppingBasket";
// import withFirebaseAuth from "react-with-firebase-auth";
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "./firebase_config";

// const firebaseApp = firebase.initializeApp(firebaseConfig);


class App extends Component {
 render(){

  
   return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/meals" component={MealListing} />
          <Route exact path="/meals/:id" component={MealDetail} />
          <Route exact path="/purchase/:id" component={Purchase} />
          <Route exact path="/newmeal" component={NewMeal} />
          <Route exact path="/shoppingbasket" component={ShoppingBasket} />
          <Route component={MealListing} />
        </Switch>
      </div>
    </Router>
  );
 }
};


export default App;
