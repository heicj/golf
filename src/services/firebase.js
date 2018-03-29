import firebase from 'firebase';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATA_BASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

const firebaseApp = firebase.initializeApp(config);

export const auth = firebaseApp.auth();

export const providers = firebase.auth;

export const db = firebaseApp.database();

export const storage = firebase.storage();