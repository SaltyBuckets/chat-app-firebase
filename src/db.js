// Conveniently import this file anywhere to use db

import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDnat0GDN9gv3c_G1uuSie48MGS6TxGOj0',
  authDomain: 'chat-app-dc803.firebaseapp.com',
  databaseURL: 'https://chat-app-dc803.firebaseio.com',
  projectId: 'chat-app-dc803',
  storageBucket: 'chat-app-dc803.appspot.com',
  messagingSenderId: '1022624506667',
  appId: '1:1022624506667:web:5f8fc22459f3959c229b6e',
  measurementId: 'G-16NJRK9FLV',
};
const db = firebase.initializeApp(firebaseConfig).firestore();
export { db, firebase };
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
