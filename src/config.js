import AsyncStorage from '@react-native-async-storage/async-storage';

import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDTLJSis4_MbcvLy-8T7TUJBzIQT6hHp64',
  authDomain: 'react-native-project-47ba4.firebaseapp.com',
  databaseURL: 'https://react-native-project-47ba4-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-native-project-47ba4',
  storageBucket: 'react-native-project-47ba4.appspot.com',
  messagingSenderId: '257778727491',
  appId: '1:257778727491:web:c09933b8a55d9b8a1432f6',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
