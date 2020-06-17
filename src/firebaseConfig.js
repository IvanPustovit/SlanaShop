import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmRwCWtQpK4BE2P2OH2oin_lKLgC6AVRk",
  authDomain: "slana-88585.firebaseapp.com",
  databaseURL: "https://slana-88585.firebaseio.com",
  projectId: "slana-88585",
  storageBucket: "slana-88585.appspot.com",
  messagingSenderId: "529564567921",
  appId: "1:529564567921:web:868e97c1593862379f0ed0",
  measurementId: "G-F7699MYYR9",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
