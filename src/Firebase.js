// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxtq9DB0dVGUchlSKYvcMAmdid4LwYH8s",
  authDomain: "real-estate-auth-67ccd.firebaseapp.com",
  projectId: "real-estate-auth-67ccd",
  storageBucket: "real-estate-auth-67ccd.appspot.com",
  messagingSenderId: "365953864005",
  appId: "1:365953864005:web:b470d6db0f4d1fd34d6e2c"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};