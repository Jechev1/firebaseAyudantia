
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCKePTDIxp_H8hFpGm-8L3F6_fE_yZE-Lc",
  authDomain: "fir-ayudantia-6ecac.firebaseapp.com",
  projectId: "fir-ayudantia-6ecac",
  storageBucket: "fir-ayudantia-6ecac.firebasestorage.app",
  messagingSenderId: "322492795465",
  appId: "1:322492795465:web:1e10b6838c466899ee8d98",
  measurementId: "G-K61RC6ZX2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Para la base de datos Firestore

// 5️⃣ Exportar para usar en otros archivos JavaScript
export { app, analytics, db };
