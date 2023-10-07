import AsyncStorage from '@react-native-async-storage/async-storage';

import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAwyz5OZIHUei8xxQncNHsScm3Lu9isZ4w',
  authDomain: 'react-native-hw-9136d.firebaseapp.com',
  projectId: 'react-native-hw-9136d',
  storageBucket: 'react-native-hw-9136d.appspot.com',
  messagingSenderId: '582448937401',
  appId: '1:582448937401:web:1fd924e349bc6466e6de68',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
