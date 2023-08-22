// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL8ria0frgp12ITznRRTy7_8x_dVWk-u0",
  authDomain: "netflix-f6964.firebaseapp.com",
  projectId: "netflix-f6964",
  storageBucket: "netflix-f6964.appspot.com",
  messagingSenderId: "652390514230",
  appId: "1:652390514230:web:4de88c9e7d4b6d4ac22297",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth();
