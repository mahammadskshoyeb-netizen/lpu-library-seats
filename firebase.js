// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjuDwY8FY00IpQlCWarq-nbLXoJMLOZ3c",
  authDomain: "lpu-library-seats.firebaseapp.com",
  projectId: "lpu-library-seats",
  storageBucket: "lpu-library-seats.firebasestorage.app",
  messagingSenderId: "270403825849",
  appId: "1:270403825849:web:ada0612035411e5ae76b68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);