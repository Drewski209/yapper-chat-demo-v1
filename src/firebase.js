import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyBj9mV-rxEh2JIvsCFDlDE85p41GXDyAaE",

  authDomain: "chat-practice-238.firebaseapp.com",

  projectId: "chat-practice-238",

  storageBucket: "chat-practice-238.appspot.com",

  messagingSenderId: "948635695255",

  appId: "1:948635695255:web:2d348944138aa4079911d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
