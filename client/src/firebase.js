import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAfQYd7gRQZvINPjh90HFszpogKeUrcY3w",
  authDomain: "edesia-1557464464178.firebaseapp.com",
  databaseURL: "https://edesia-1557464464178.firebaseio.com",
  projectId: "edesia-1557464464178",
  storageBucket: "edesia-1557464464178.appspot.com",
  messagingSenderId: "278603223557",
  appId: "1:278603223557:web:1e0304748efe1bf4afc26c"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
