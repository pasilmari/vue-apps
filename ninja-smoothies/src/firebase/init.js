import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyDPc8rPTrwvqnEeVHj7ULBGsfWyLiHzEss",
    authDomain: "udemy-ninja-smoothies-5edbc.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-5edbc.firebaseio.com",
    projectId: "udemy-ninja-smoothies-5edbc",
    storageBucket: "udemy-ninja-smoothies-5edbc.appspot.com",
    messagingSenderId: "282534827653",
    appId: "1:282534827653:web:3608fcde1e55c1af5a3bec",
    // measurementId: "G-9L5VBKDQ1C"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(config);
//   firebase.analytics();
firebaseApp.firestore()   //.settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
