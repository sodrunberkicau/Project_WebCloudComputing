import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth"

/**
 * Konfigurasi Firebase
 * Berisi kredensial dan pengaturan untuk koneksi ke Firebase
 */
const firebaseConfig = {
  apiKey: "AIzaSyD8GVAbD5ATnMwSJxVyqBxJVar6Enu5kHA",
  authDomain: "slangtech-a3be8.firebaseapp.com",
  databaseURL: "https://slangtech-a3be8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "slangtech-a3be8",
  storageBucket: "slangtech-a3be8.firebasestorage.app",
  messagingSenderId: "894192138587",
  appId: "1:894192138587:web:11c8f9b8a086531be2c27e",
  measurementId: "G-NT9PYD915Z"
};

// Inisialisasi variabel Firebase
let app
let database
let storage
let auth

try {
  // Inisialisasi Firebase
  app = initializeApp(firebaseConfig)
  database = getDatabase(app)
  storage = getStorage(app)
  auth = getAuth(app)

  // Atur persistensi ke LOCAL untuk menjaga user tetap login
  if (typeof window !== "undefined") {
    setPersistence(auth, browserLocalPersistence).catch((error) => {
      console.error("Error setting auth persistence:", error)
    })
  }
} catch (error) {
  console.error("Error initializing Firebase:", error)
  // Sediakan fallback atau tangani error dengan tepat
  app = null
  database = null
  storage = null
  auth = null
}

export { app, database, storage, auth }

