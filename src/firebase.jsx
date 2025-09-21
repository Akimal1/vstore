// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdgYYLUinOutLJh62jHyH3S8EL6osblYg",
  authDomain: "vstore-ee4c5.firebaseapp.com",
  projectId: "vstore-ee4c5",
  storageBucket: "vstore-ee4c5.firebasestorage.app",
  messagingSenderId: "1097268800137",
  appId: "1:1097268800137:web:d7e065cc4ab72eb82e3458",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
