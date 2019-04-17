const express = require("express");
const stripe = require("stripe")("sk_test_ehosYBFIVa622d6AAkce8Sdl00eVuN9mA9");

// const mongoose = require("mongoose");

//get access to routes and sequelize models
const routes = require("./routes");
const db = require("./models");

const app = express();
const bodyParser = require("body-parser");
// require("dotenv").config();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(require("body-parser").text());

//endpoint that receives POST purchase request from client
app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });
    res.json({status});
  } catch (err) {
    //if charge cannot be completed, a generic error is thrown.
    res.status(500).end();
  }
});


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and HTML
app.use(routes);
var syncOptions = { force: false };  //do not create new tables each time

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

//for every model in models folder sync to sequelize with the syncOptions provided
db.sequelize.sync(syncOptions).then(function (){
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
});

//send express out so that all routes are accessible
module.exports = app;