import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCQ8xPJpjWgzYrwS6wLVNjsG9LpSsraAsE',
  authDomain: 'crwn-prj-db.firebaseapp.com',
  projectId: 'crwn-prj-db',
  storageBucket: 'crwn-prj-db.appspot.com',
  messagingSenderId: '4180312721',
  appId: '1:4180312721:web:8628760ebc58255667b530',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);