import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyB-95bJ9Kil5YPoQdzGM4hJBZ-KHreijQU",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "accountbook-l9ea9.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "accountbook-l9ea9",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "accountbook-l9ea9.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "85242748556",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:85242748556:web:9875307d5d79fb13b2e5a9",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-F8K3SQF04M"
};

export async function testFirebaseConnection() {
  try {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    
    // Try to access Firestore
    const testCollection = collection(db, 'test');
    await getDocs(testCollection);
    
    console.log('✅ Firebase connection successful');
    console.log('Auth initialized:', !!auth);
    console.log('Firestore initialized:', !!db);
    return true;
  } catch (error) {
    console.error('❌ Firebase connection failed:', error);
    return false;
  }
}
