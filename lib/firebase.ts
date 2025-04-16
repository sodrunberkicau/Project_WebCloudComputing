import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth"

/**
 * Konfigurasi Firebase
 * Berisi kredensial dan pengaturan untuk koneksi ke Firebase
 */
const firebaseConfig = {
  apiKey: "AIzaSyCw0H8NDOWQTOhhxgdeWboI225-QK33sTo",
  authDomain: "slangtech-39367.firebaseapp.com",
  databaseURL: "https://slangtech-39367-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "slangtech-39367",
  storageBucket: "slangtech-39367.firebasestorage.app",
  messagingSenderId: "503448097262",
  appId: "1:503448097262:web:e52ee537dcfb5212ee3eff",
  measurementId: "G-GG11V4WN3V"
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

