// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJPRnfqE8uO8TKhwqpjIL2uOsLYgD3wLI",
  authDomain: "inventory-mangement-e37d4.firebaseapp.com",
  projectId: "inventory-mangement-e37d4",
  storageBucket: "inventory-mangement-e37d4.appspot.com",
  messagingSenderId: "637675241681",
  appId: "1:637675241681:web:8beb3855228528683fc5f0",
  measurementId: "G-LF7P592V4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}