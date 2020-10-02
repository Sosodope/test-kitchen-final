import firebase from 'firebase/app'
import 'firebase/firestore'

export async function loadDB() {
  try {
    var config = {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTH,
      databaseURL: process.env.NEXT_PUBLIC_DB,
      projectId: process.env.NEXT_PUBLIC_PRJ_ID,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE,
      messagingSenderId: process.env.NEXT_PUBLIC_SENDER,
      appId: process.env.NEXT_PUBLIC_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_MEASUREMENT
    };
    firebase.initializeApp(config);
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return firebase.firestore();
}