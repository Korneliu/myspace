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

database.ref('ideas/-MeYb5j68YGOYeeC06Xp').remove();

database.ref('expenses').push({
  description: 'first description',
  note: 'First note',
  amount: 23234
})
database.ref('expenses').push({
  description: 'Second description',
  note: 'Second note',
  amount: 23234
})

database.ref('expenses').push({
  description: 'Third description',
  note: 'Third note',
  amount: 23234
})




// database.ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val());
//   });
// database.ref('age').set(44)


// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('error fetching data', e);
//   });



/* database.ref().set({
  name: 'Max',
  age: 44,
  job: {
    company: 'Amazon',
    title: 'Software engineer'
  },
  isSingle: false,
  location: {
    city: 'Aliso',
    street: 'Sobrante',
    number: 70
  }
})

 */
