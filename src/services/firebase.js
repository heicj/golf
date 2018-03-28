import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA8_2T5a74Xyclol1IPSHC3l7dxbRtM_bM',
  authDomain: 'golf-app-52154.firebaseapp.com',
  databaseURL: 'https://golf-app-52154.firebaseio.com',
  projectId: 'golf-app-52154',
  storageBucket: 'golf-app-52154.appspot.com',
  messagingSenderId: '341093415332'
};

// firebase.initializeApp(config);

const firebaseApp = firebase.initializeApp(config);

export const auth = firebaseApp.auth();

export const providers = firebase.auth;

export const db = firebaseApp.database();

export const storage = firebase.storage();