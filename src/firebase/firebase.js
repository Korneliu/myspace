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

const database = firebase.database();

database.ref().set({
  name: 'Max',
  age: 44,
  isSingle: false,
  location: {
    city: 'Aliso',
    street: 'Sobrante',
    number: 70
  }
}).then(() => {
  console.log('Data is saved')
}).catch((e) => {
  console.log('This failed', e)
});

database.ref().update({
  'location/city': 'Cabarete'
});




