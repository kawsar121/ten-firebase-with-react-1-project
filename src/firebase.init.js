// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk0ec5o2IqZclVHsqfGWCfoWe_oUBmnzU",
  authDomain: "react-with-firebase-1.firebaseapp.com",
  projectId: "react-with-firebase-1",
  storageBucket: "react-with-firebase-1.firebasestorage.app",
  messagingSenderId: "952182035947",
  appId: "1:952182035947:web:ba65555aebde56836235ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;