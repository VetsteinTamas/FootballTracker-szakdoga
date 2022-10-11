// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9QOZNUcMsWJ47PIZvjs7WAfbBnvP6iNw",
  authDomain: "szakdolgozat-szte.firebaseapp.com",
  projectId: "szakdolgozat-szte",
  storageBucket: "szakdolgozat-szte.appspot.com",
  messagingSenderId: "612852689887",
  appId: "1:612852689887:web:e4f4c8c1b20c8fe78db26a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;