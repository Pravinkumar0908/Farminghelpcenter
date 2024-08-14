import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY_f95H1vhJtnJy6lDXkooqQ_KfRgF44o",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "farmingwebsite-4a278",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const firestore = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

const signInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);
const createUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);
const signInWithPopup = (provider) => auth.signInWithPopup(provider);
const signOut = () => auth.signOut(); // Ensure this line is included

export { auth, firestore, googleProvider, facebookProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut };
