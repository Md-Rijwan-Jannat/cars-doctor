// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('firebase config file', import.meta.env.VITE_apiKey);
const firebaseConfig = {
    apiKey:import.meta.ENV.VITE_apiKey,
    authDomain:import.meta.ENV.VITE_authDomain,
    projectId:import.meta.ENV.VITE_projectId,
    storageBucket:import.meta.ENV.VITE_storageBucket,
    messagingSenderId:import.meta.ENV.VITE_messagingSenderId,
    appId:import.meta.ENV.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;