import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCne6VZv4MFzTAoKP0cDl6B0ZWr1CtehXQ",
  authDomain: "myspace-8302f.firebaseapp.com",
  databaseURL: "https://myspace-8302f-default-rtdb.firebaseio.com",
  projectId: "myspace-8302f",
  storageBucket: "myspace-8302f.appspot.com",
  messagingSenderId: "418798805890",
  appId: "1:418798805890:web:ffb2b7b4b5665e3894659b",
  measurementId: "G-TKFC39QHV0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
  name: 'Max'
})


