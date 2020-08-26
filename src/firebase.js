import firebase from "firebase";
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBayiZledbug9YvVAIEL2rmXykgkGAj6P8",
  authDomain: "clone-3c13c.firebaseapp.com",
  databaseURL: "https://clone-3c13c.firebaseio.com",
  projectId: "clone-3c13c",
  storageBucket: "clone-3c13c.appspot.com",
  messagingSenderId: "186192912270",
  appId: "1:186192912270:web:1724e6577ffbf6757d0edf",
  measurementId: "G-XREWG4FEQ5"
};

//   const db = firebaseApp.firestore();
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export {auth};