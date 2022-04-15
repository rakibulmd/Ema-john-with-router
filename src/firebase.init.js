// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGGNG5oQNCUTk9nhgS7zwdW1Dc1HkeGFM",
    authDomain: "ema-john-simple-bf862.firebaseapp.com",
    projectId: "ema-john-simple-bf862",
    storageBucket: "ema-john-simple-bf862.appspot.com",
    messagingSenderId: "194088945670",
    appId: "1:194088945670:web:28e4bc9382828da08cdb87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
