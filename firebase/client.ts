import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBBojYst9pFz9FBaweKJ1D8mvBrLGTbOK0",
    authDomain: "ajiraprep-2830c.firebaseapp.com",
    projectId: "ajiraprep-2830c",
    storageBucket: "ajiraprep-2830c.firebasestorage.app",
    messagingSenderId: "254744913984",
    appId: "1:254744913984:web:203dfc0c2facc8121b97a5",
    measurementId: "G-96RB6ZWWDF"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);