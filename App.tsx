import React from 'react';
import Navigation from './Navigation';
import { initializeApp } from 'firebase/app';
import { NavigationContainer } from '@react-navigation/native';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGE_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID
};
initializeApp(firebaseConfig);

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}