
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB_hLtvuSTmAZjajub5xumhZ_tTRzhnJUc",
  authDomain: "ecommerce-f464d.firebaseapp.com",
  projectId: "ecommerce-f464d",
  storageBucket: "ecommerce-f464d.appspot.com",
  messagingSenderId: "227101059635",
  appId: "1:227101059635:web:ebdfac57757a099b001146",
  measurementId: "G-E82KJPELEH"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export const database = getAuth(app)

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Get the authentication service
export const database = getFirestore(app);