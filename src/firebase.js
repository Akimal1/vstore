// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrvbhemAJ5GCzh6kYq5yKqEuhgZdfxLSQ",
  authDomain: "vstore-new.firebaseapp.com",
  projectId: "vstore-new",
  storageBucket: "vstore-new.firebasestorage.app",
  messagingSenderId: "1097954491190",
  appId: "1:1097954491190:web:277ac509b3cde5e5fb1197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
