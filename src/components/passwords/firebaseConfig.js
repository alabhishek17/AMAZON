// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signOut} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBHKbp20Qtbmn8Ptv900BpE1q4NS0oIaEg",
  authDomain: "password-517c6.firebaseapp.com",
  projectId: "password-517c6",
  storageBucket: "password-517c6.appspot.com",
  messagingSenderId: "1054358323978",
  appId: "1:1054358323978:web:70cad04baca46ea61af0f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const getdata=getAuth(app)
 