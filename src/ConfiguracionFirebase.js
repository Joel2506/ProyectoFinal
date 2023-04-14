import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWO6eThb2ISE_Y1J4nk-PXIH5t5_t-2lY",
  authDomain: "muro-interactivo13.firebaseapp.com",
  projectId: "muro-interactivo13",
  storageBucket: "muro-interactivo13.appspot.com",
  messagingSenderId: "288696020495",
  appId: "1:288696020495:web:a94c5e3389531320ea7d7a",
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();