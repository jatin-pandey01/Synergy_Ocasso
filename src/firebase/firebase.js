import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwxlydLfVvseRJegtDo77qh_YQB_75z_Y",
  authDomain: "ocassso.firebaseapp.com",
  projectId: "ocassso",
  storageBucket: "ocassso.appspot.com",
  messagingSenderId: "6897357995",
  appId: "1:6897357995:web:7715edf7217e4ed46ad3ee",
  measurementId: "G-WS5KN1L9VW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);