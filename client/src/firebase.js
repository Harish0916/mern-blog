// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log(import.meta.env.VITE_FIREBASE_API_KEY)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-fa466.firebaseapp.com",
  projectId: "mern-blog-fa466",
  storageBucket: "mern-blog-fa466.appspot.com",
  messagingSenderId: "90421721048",
  appId: "1:90421721048:web:e4c9fff3c94423b26a64ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);