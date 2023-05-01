import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC-H1HeKJ1xEjFgixL5Wu_oOASfkOUsNCw",
  authDomain: "clone-build-2.firebaseapp.com",
  projectId: "clone-build-2",
  storageBucket: "clone-build-2.appspot.com",
  messagingSenderId: "451657853743",
  appId: "1:451657853743:web:04140046234fe02ae8cfda"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore(); //Db cloudfirestore

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}

