import axios from "axios";

export default {
  // Gets all books
  getMeals: function() {
    console.log("inside API services");
    return axios.get("/api/meals");
  },
  // Gets the book with the given id
  getMealById: function(id) {
    return axios.get("/api/meals/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveMeal: function(mealData) {
    return axios.post("/api/books", mealData);
  }
};
