import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/MealListing";
import Detail from "./pages/MealDetail";
import Nav from "./components/Nav";
import MealListing from "./pages/MealListing";
import MealDetail from "./pages/MealDetail";
import Splash from "./pages/Splash";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/meals" component={MealListing} />
          <Route exact path="/meals/:id" component={MealDetail} />
          <Route component={MealListing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
