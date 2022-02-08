import axios from "axios";

export default {
  //get user zipCode with lat and lon
  getZipcode: function(lat, lon, appID, appCode) {
    console.log("Inside API.getZipcode");
    console.log("lat", lat);
    console.log("lon", lon);
    console.log("appID", appID);
    console.log("appCode", appCode);
    return axios.get(`https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?app_id=${appID}&app_code=${appCode}&mode=retrieveAddresses&prox=${lat},${lon}`);
  },
  // Gets all meals
  getMeals: function() {
    console.log("inside API services");
    return axios.get("/api/meals");
  },
  // Splash meals
  getMealsSplash: function() {
    console.log("inside API get meals splash");
    return axios.get("/api/meals/splash");
  },
  // Splash meals by Location
  getMealsByLoc: function(zipcode) {
    console.log("inside API get meals by loc");
    return axios.get("/api/meals/splash/"+ zipcode);
  },
  // Gets the meals with the given id
  getMealById: function(id) {
    return axios.get("/api/meals/" + id);
  },
  //searches for meal by keyword
  searchMeals: function(searchQuery) {
    console.log("Inside API search by query");
    return axios.get("api/meals/search/"+ searchQuery);
  },
  //adds meal to cart
  addToCart: function(id){
    console.log("Inside add to cart API");
    return axios.get("api/meals/add/"+id);
  },
  // Deletes the meal with the given id
  deleteMeal: function(id) {
    return axios.delete("/api/meals/" + id);
  },
  // Saves a meal to the database
  saveMeal: function(mealData) {
    return axios.post("/api/meals", mealData);
  }
};
