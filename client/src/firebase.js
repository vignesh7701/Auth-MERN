
import { initializeApp } from 'firebase/app'


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernauth-7af.firebaseapp.com",
  projectId: "mernauth-7af",
  storageBucket: "mernauth-7af.appspot.com",
  messagingSenderId: "573316072643",
  appId: "1:573316072643:web:97153350c21c16b4f20e76"
};

export const app = initializeApp(firebaseConfig);
