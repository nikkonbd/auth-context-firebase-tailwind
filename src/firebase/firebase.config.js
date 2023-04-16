// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXH624P7OuYmXumBKscwoFgF77y10zS2A",
    authDomain: "auth-context-firebase-tailwind.firebaseapp.com",
    projectId: "auth-context-firebase-tailwind",
    storageBucket: "auth-context-firebase-tailwind.appspot.com",
    messagingSenderId: "414076235321",
    appId: "1:414076235321:web:3bf5c52e7481de0e6ea7e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;