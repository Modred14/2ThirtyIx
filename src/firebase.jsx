// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBG-AHhvRIE_JtZqX1koHM-GU2ZCwO7Os",
  authDomain: "twothirtyix.firebaseapp.com",
  projectId: "twothirtyix",
  storageBucket: "twothirtyix.appspot.com",
  messagingSenderId: "121040297423",
  appId: "1:121040297423:web:e77cded9eedf6482f346ba",
  measurementId: "G-VL470HLRLM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default { auth, db };
