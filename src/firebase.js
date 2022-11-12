// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwqcuToz-WFVsecYO_okURoUyO3bCSO5Y",
  authDomain: "user-auth-app-7fd75.firebaseapp.com",
  projectId: "user-auth-app-7fd75",
  storageBucket: "user-auth-app-7fd75.appspot.com",
  messagingSenderId: "82348015700",
  appId: "1:82348015700:web:b626905907672862cb2dc1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);
