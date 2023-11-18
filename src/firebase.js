import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDb1zQ0a5E-rZlExwsL3-v7IqHKmUHK9TQ",
    authDomain: "drivemorning-777.firebaseapp.com",
    databaseURL: "https://drivemorning-777-default-rtdb.firebaseio.com",
    projectId: "drivemorning-777",
    storageBucket: "drivemorning-777.appspot.com",
    messagingSenderId: "597013960769",
    appId: "1:597013960769:web:c4bc9ddad5365c020e4ec0",
    measurementId: "G-45DE207W7J"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }