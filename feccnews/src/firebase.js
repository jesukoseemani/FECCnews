import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAQZfS4PcZ2Iz_gb9rs6F1Oe_aVdXWwxso',
  authDomain: 'feccclane.firebaseapp.com',
  projectId: 'feccclane',
  storageBucket: 'feccclane.appspot.com',
  messagingSenderId: '742527799397',
  appId: '1:742527799397:web:a09ac1ff74989a547bf68c',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
