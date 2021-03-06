import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfQYd7gRQZvINPjh90HFszpogKeUrcY3w",
    authDomain: "edesia-1557464464178.firebaseapp.com",
    databaseURL: "https://edesia-1557464464178.firebaseio.com",
    projectId: "edesia-1557464464178",
    storageBucket: "edesia-1557464464178.appspot.com",
    messagingSenderId: "278603223557",
    appId: "1:278603223557:web:2cdccf8851a45b23"
  };

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
  }

  //defining authentication functions as class methods step by step
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => this.auth.signOut();
}

export default Firebase;