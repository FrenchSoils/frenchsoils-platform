// utils/firebase.js
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

let firebaseApp = null;
let firebaseAuth = null;

if (typeof window !== 'undefined') {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
  };

  // ===> LE CONSOLE.LOG QUI NOUS FAIT VÉRIFIER LES VALEURS
  console.log('🔥 Firebase client config:', config);

  if (!getApps().length) {
    firebaseApp = initializeApp(config);
  } else {
    firebaseApp = getApps()[0];
  }
  firebaseAuth = getAuth(firebaseApp);
}

export { firebaseApp as app, firebaseAuth as auth };

