import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyBalZKGsbonBLDrgbTxhBJU3IeJe2ym_ZQ",
    authDomain: "ninja-chat-cdd28.firebaseapp.com",
    databaseURL: "https://ninja-chat-cdd28.firebaseio.com",
    projectId: "ninja-chat-cdd28",
    storageBucket: "ninja-chat-cdd28.appspot.com",
    messagingSenderId: "1094333031211",
    appId: "1:1094333031211:web:e13a4436d5ee997c3c5b6e"
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({timestampsInSnapshots: true)

export default firebaseApp.firestore()

