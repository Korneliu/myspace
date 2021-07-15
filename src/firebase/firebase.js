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

//child_removed
database.ref('ideas').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

// child_changed
database.ref('ideas').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

// child_added
database.ref('ides').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});


// database.ref('ideas')
//   .on('value', (snapshot) => {
//     const ideas = [];
//     snapshot.forEach((childSnapshot) => {
//       ideas.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(ideas)
//   });


// database.ref('ideas').push({
//   title: 'first idea',
//   text: 'first idea text'
// })



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




