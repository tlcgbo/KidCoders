import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDsy5i93I5sZMG1h-WO65SIjdd-pAs6xYY",
    authDomain: "route-protection-dac71.firebaseapp.com",
    projectId: "route-protection-dac71",
    storageBucket: "route-protection-dac71.appspot.com",
    messagingSenderId: "1000136772412",
    appId: "1:1000136772412:web:67b3961a1eec0f828cac39"
  };

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
export{projectAuth}