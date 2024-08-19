// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIKpddfLz7Mwjv6AijayBwVbjib-Ujz_k",
  authDomain: "lifestylemart-d7068.firebaseapp.com",
  projectId: "lifestylemart-d7068",
  storageBucket: "lifestylemart-d7068.appspot.com",
  messagingSenderId: "537118320040",
  appId: "1:537118320040:web:2125e592c0fff8143ce99d",
  measurementId: "G-DKK33PF0SK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;