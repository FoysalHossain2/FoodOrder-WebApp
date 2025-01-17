// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyDNDj4FqiBhSGUtFe7bh8F1sZFt9xvjri8",
    authDomain: "foodorder-e94fa.firebaseapp.com",
    projectId: "foodorder-e94fa",
    storageBucket: "foodorder-e94fa.firebasestorage.app",
    messagingSenderId: "869605707704",
    appId: "1:869605707704:web:29d93bf7cccface614094d",
    measurementId: "G-BXGXMNM58D"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailPassword = async (email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user
        console.log(user);
        
    } catch (err) {
        console.log(err);
    }
}

export {registerWithEmailPassword};