// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYiAwmaWUcvlwintWE_S6Xp1uiMtOtYaA",
  authDomain: "chat-d9481.firebaseapp.com",
  projectId: "chat-d9481",
  storageBucket: "chat-d9481.appspot.com",
  messagingSenderId: "106009337888",
  appId: "1:106009337888:web:2b75b17f6cd4d65f1d9c45",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
