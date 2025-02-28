// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQXnphNEGce8pJp0KPWNnOnH7CTWKHUMg",
  authDomain: "js1-project-a2f4e.firebaseapp.com",
  projectId: "js1-project-a2f4e",
  storageBucket: "js1-project-a2f4e.firebasestorage.app",
  messagingSenderId: "670715508627",
  appId: "1:670715508627:web:3dd7e33da8548e4f7ada66",
  measurementId: "G-4B4BNQDM5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialising firebase authentications
const auth = getAuth(app);

export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword}