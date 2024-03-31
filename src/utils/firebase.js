// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT7YoZoyzwOncnBI456r0twiVltHgCfU8",
  authDomain: "vizflixgpt.firebaseapp.com",
  projectId: "vizflixgpt",
  storageBucket: "vizflixgpt.appspot.com",
  messagingSenderId: "87130074157",
  appId: "1:87130074157:web:b95a90cc4976df67051ca4",
  measurementId: "G-F3N404EJ65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);