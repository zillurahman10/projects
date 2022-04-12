// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAv8H0Nk4QhI_9fPUGMkSS_piPdcjhoo_0",
    authDomain: "foodpanda-10f0b.firebaseapp.com",
    projectId: "foodpanda-10f0b",
    storageBucket: "foodpanda-10f0b.appspot.com",
    messagingSenderId: "493826862070",
    appId: "1:493826862070:web:212553c610e5603016b5d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;