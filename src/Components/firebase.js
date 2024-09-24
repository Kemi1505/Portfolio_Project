import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJmMbGTtlRTPBqyW3h7-h2sTNksrYybT8",
  authDomain: "budget-app-9ecac.firebaseapp.com",
  projectId: "budget-app-9ecac",
  storageBucket: "budget-app-9ecac.appspot.com",
  messagingSenderId: "618491480923",
  appId: "1:618491480923:web:587731188840b4744de87e",
  measurementId: "G-RVPDJJT9CZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;