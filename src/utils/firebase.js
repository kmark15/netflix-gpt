// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3ikY4eGdQNF4MaAA3zp_QXZu0fvR9C_A",
  authDomain: "netflixgpt-e90ff.firebaseapp.com",
  projectId: "netflixgpt-e90ff",
  storageBucket: "netflixgpt-e90ff.firebasestorage.app",
  messagingSenderId: "1053838681080",
  appId: "1:1053838681080:web:840a77730f44c11a17ec0d",
  measurementId: "G-P9J3BGCYZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth  = getAuth();
