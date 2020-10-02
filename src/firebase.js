import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAMX9_LZfAuDGhAw-gvSZbrFJGTapC0upY",
  authDomain: "messenger-clone-1d8ab.firebaseapp.com",
  databaseURL: "https://messenger-clone-1d8ab.firebaseio.com",
  projectId: "messenger-clone-1d8ab",
  storageBucket: "messenger-clone-1d8ab.appspot.com",
  messagingSenderId: "787204665163",
  appId: "1:787204665163:web:d0f7a2d06c89bc542982ce",
  measurementId: "G-SPRB7Q7RFX",
});

const db = firebaseApp.firestore();

export default db;
