import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore  } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBNku8Ud7BdhIklwxaHkQm8mVxbW7kT-Qc",
  authDomain: "chat-4bb12.firebaseapp.com",
  projectId: "chat-4bb12",
  storageBucket: "chat-4bb12.appspot.com",
  messagingSenderId: "549341663482",
  appId: "1:549341663482:web:41289ad0639bd5e18db943"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

