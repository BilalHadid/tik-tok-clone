import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChQfmg-PkNKQ0OtLPvXa7J6c5hTHGO5E0",
  authDomain: "fir-tik-tok.firebaseapp.com",
  databaseURL: "https://fir-tik-tok.firebaseio.com",
  projectId: "fir-tik-tok",
  storageBucket: "fir-tik-tok.appspot.com",
  messagingSenderId: "39305565527",
  appId: "1:39305565527:web:ff1876a218da9457851a12",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
