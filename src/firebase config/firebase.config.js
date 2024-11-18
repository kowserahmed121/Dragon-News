// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEZqfVdzPKGs5cJzg8mT5zc6HPh1rFMEk",
  authDomain: "dragon-news-71e35.firebaseapp.com",
  projectId: "dragon-news-71e35",
  storageBucket: "dragon-news-71e35.firebasestorage.app",
  messagingSenderId: "731676341442",
  appId: "1:731676341442:web:1c7fed6f41ee713b59b75b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
