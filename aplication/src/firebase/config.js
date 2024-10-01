// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHvI82PuLbMb32JJrhP5EUlPFw-Vm8fOc",
    authDomain: "estados-y-servicios-en-nube.firebaseapp.com",
    projectId: "estados-y-servicios-en-nube",
    storageBucket: "estados-y-servicios-en-nube.appspot.com",
    messagingSenderId: "962816571197",
    appId: "1:962816571197:web:9b66818e12dad965043754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;