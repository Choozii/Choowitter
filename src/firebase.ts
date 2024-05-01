import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACBmEJqRujJMzR-cShBmduiTeQxTgVk1I",
  authDomain: "choowitter-40cad.firebaseapp.com",
  projectId: "choowitter-40cad",
  storageBucket: "choowitter-40cad.appspot.com",
  messagingSenderId: "401281933255",
  appId: "1:401281933255:web:a824bdbf66acc13dd843e2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
