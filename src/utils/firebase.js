// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyNaQM4jAoTtyDjEd2KRqkY0ii1hklkfI",
  authDomain: "netflixgpt-b4575.firebaseapp.com",
  projectId: "netflixgpt-b4575",
  storageBucket: "netflixgpt-b4575.appspot.com",
  messagingSenderId: "396693943638",
  appId: "1:396693943638:web:6745f3d3e22d7f997b12f7",
  measurementId: "G-XQ6ZS3BH2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();