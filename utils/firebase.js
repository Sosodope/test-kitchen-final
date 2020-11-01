import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'


const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH,
  databaseURL: process.env.NEXT_PUBLIC_DB,
  projectId: process.env.NEXT_PUBLIC_PRJ_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDER,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT
}

export async function loadDB() {
  try {
    app.initializeApp(config);
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return app.firestore();
}

export const getRecipes = () => {
  try {
    app.initializeApp(config)
    const firestore = app.firestore()
    return new Promise((resolve, reject) => {
      firestore.collection("recipes")
      .onSnapshot((snapshot) => {
        console.log('onSnapshot Called!')
        let updatedData = snapshot.docs.map(doc => doc.data())
        resolve(updatedData)
      }, reject)
    })
  } catch(err) {
    console.error('err', err);
  }
}

export const storage = () => {
  app.initializeApp(config)
  return app.storage() 
}

// export const publishRecipe = () => {
//   try {
//     app.initializeApp(config)
//     const firestore = app.firestore()
//     return new Promise((resolve, reject) => {
//       firestore.collection("recipes")
//       .onSnapshot((snapshot) => {
//         let updatedData = snapshot.docs.map(doc => doc.data())
//         resolve(updatedData)
//       }, reject)
//     })
//   } catch(err) {
//     console.error('err', err);
//   }
// }
