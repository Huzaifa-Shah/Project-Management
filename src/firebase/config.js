import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDi7GRG6GErU2byjjeixy9_XHI4Sp0ck2M",
  authDomain: "project-management-5be10.firebaseapp.com",
  projectId: "project-management-5be10",
  storageBucket: "project-management-5be10.appspot.com",
  messagingSenderId: "133334544168",
  appId: "1:133334544168:web:06f77878d679c706f1ea1d",
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore,projectAuth, projectStorage, timestamp}