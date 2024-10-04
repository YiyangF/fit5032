// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_-zVrU-0wIQyLZAbASC2LfxMNqoVwRaM",
  authDomain: "week7-6a9e0.firebaseapp.com",
  projectId: "week7-6a9e0",
  storageBucket: "week7-6a9e0.appspot.com",
  messagingSenderId: "195330468816",
  appId: "1:195330468816:web:c9e4689eca8770b18167d5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db