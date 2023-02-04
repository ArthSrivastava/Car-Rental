import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
console.log(import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY)
// const config ={
//     apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     // databaseURL: import.meta.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// }
const firebaseConfig = {

    apiKey: "AIzaSyDp7vi54gx-boBBauYPJ1fQ3kCRDkVGc6w",

    authDomain: "car-rental-44a15.firebaseapp.com",

    projectId: "car-rental-44a15",

    storageBucket: "car-rental-44a15.appspot.com",

    messagingSenderId: "549527487937",

    appId: "1:549527487937:web:dac264d0f8f8d19e4cdb40",

    measurementId: "G-3WDZPJHJE1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// const app = initializeApp(config);
export const auth = getAuth(app);
export default app;