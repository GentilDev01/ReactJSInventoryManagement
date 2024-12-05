import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "inventory-af0ee.appspot.com",
  messagingSenderId: "716829445264",
  appId: "1:716829445264:web:ab62a67521d64a372c5c15",
  measurementId: "G-8VLBNYNKXT"
};

// Initialize Firebase
//in firebase config storageBucket: "inventoryy-af0ee.firebasestorage.com","
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);