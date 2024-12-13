import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// -------- Firebase Code --------

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC23pS5qMboM8Ao0a6cHgcF9RIfeY8j_sc",
  authDomain: "vue-portfolio-f266b.firebaseapp.com",
  projectId: "vue-portfolio-f266b",
  storageBucket: "vue-portfolio-f266b.firebasestorage.app",
  messagingSenderId: "65146074835",
  appId: "1:65146074835:web:7d219b62140a53b976c626"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore to use in components
export { db };

// ---------------------------

const vueApp = createApp(App);

vueApp.use(router);

vueApp.mount('#app');
