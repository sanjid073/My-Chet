import firebase from "firebase/app"
import "firebase/auth";

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyBCGXOjmme8HzJjJtjTaw8Rgh5rA0rEiZc",
    authDomain: "mychat-1ea38.firebaseapp.com",
    projectId: "mychat-1ea38",
    storageBucket: "mychat-1ea38.appspot.com",
    messagingSenderId: "947492100461",
    appId: "1:947492100461:web:0179b506a54a9490022264"
  }).auth();
