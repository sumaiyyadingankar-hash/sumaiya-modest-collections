// assets/js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0XXpHyhafvZnwOHTxrCx7xUIw-9gYAEU",
  authDomain: "sumaiya-trendy-collections.firebaseapp.com",
  projectId: "sumaiya-trendy-collections",
  storageBucket: "sumaiya-trendy-collections.firebasestorage.app",
  messagingSenderId: "318667375422",
  appId: "1:318667375422:web:fd8f04ac2bddbffb49e26f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
