import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC9ZdUMo7UgOBbVBmUVBEkjihUxyoK9xeo",
  authDomain: "project-5-dc4a7.firebaseapp.com",
  databaseURL: "https://project-5-dc4a7-default-rtdb.firebaseio.com",
  projectId: "project-5-dc4a7",
  storageBucket: "project-5-dc4a7.firebasestorage.app",
  messagingSenderId: "802303503091",
  appId: "1:802303503091:web:c49b0a94be82109ca5a586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase =getDatabase(app);
export const authFirebase = getAuth(app);