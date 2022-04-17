// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-nWZFEoWQzOjmNdn02SkQIBf2mf3d8LI",
    authDomain: "tenth-assignment-ee402.firebaseapp.com",
    projectId: "tenth-assignment-ee402",
    storageBucket: "tenth-assignment-ee402.appspot.com",
    messagingSenderId: "339477640082",
    appId: "1:339477640082:web:1dd920b0b6d21a343d874b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;