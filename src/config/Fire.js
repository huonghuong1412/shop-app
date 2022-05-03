// import firebase from 'firebase'
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

const firebaseConfig = {
    apiKey: "AIzaSyDs08z8ofNAHGrs2zLnRT_q-kO7Cr_xLJA",
    authDomain: "huongz.firebaseapp.com",
    databaseURL: "https://huongz.firebaseio.com",
    projectId: "huongz",
    storageBucket: "huongz.appspot.com",
    messagingSenderId: "883002591598",
    appId: "1:883002591598:web:7b9143b9509c749293d97f",
    measurementId: "G-HTF3MYD4CK"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();
export default firebase;