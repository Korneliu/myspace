import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBSE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBSE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBSE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

















/* //child_removed
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
 */

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




