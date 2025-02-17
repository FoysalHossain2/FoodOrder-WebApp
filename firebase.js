// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const auth = getAuth()
export const db=getFirestore(app);
export default app