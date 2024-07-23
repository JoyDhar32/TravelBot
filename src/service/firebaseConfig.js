// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPLH3dduw1Qo6CNC20mLiHtIst8A0zd7k",
  authDomain: "aitrip-7aca2.firebaseapp.com",
  projectId: "aitrip-7aca2",
  storageBucket: "aitrip-7aca2.appspot.com",
  messagingSenderId: "521143519907",
  appId: "1:521143519907:web:d2f6102a46619ca229cd16",
  measurementId: "G-2X4S2M9BM4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);