// Setup firebase

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1aAxjW2udhB8fjNepebKVhhFo_Y0mDnA",
  authDomain: "nps-jsi15-tx.firebaseapp.com",
  projectId: "nps-jsi15-tx",
  storageBucket: "nps-jsi15-tx.appspot.com",
  messagingSenderId: "789503528548",
  appId: "1:789503528548:web:2773151d30a497414d5971",
  measurementId: "G-M5Q95JQRD9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);