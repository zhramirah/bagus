import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCcssq8a6Gjir0rLeFaWELTs71GaZCi4rQ",
  authDomain: "authapp2-a0975.firebaseapp.com",
  projectId: "authapp2-a0975",
  storageBucket: "authapp2-a0975.appspot.com",
  messagingSenderId: "717477231609",
  appId: "1:717477231609:web:22b1dba61ec28f48959b28"
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

const Firebase = {
    app: firebaseApp,
    auth: firebaseAuth
}

export default Firebase;