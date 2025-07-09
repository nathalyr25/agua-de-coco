 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDZmvO00ICmi1ZpboCuTSj06vPdXukEJxE",
   authDomain: "fir-proyects-29e01.firebaseapp.com",
   projectId: "fir-proyects-29e01",
   storageBucket: "fir-proyects-29e01.appspot.com",
   messagingSenderId: "478001884663",
   appId: "1:478001884663:web:14000a2f2080b8fd3792f2",
   measurementId: "G-KK305FQEDN"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth(app);

 export { db, auth, app };