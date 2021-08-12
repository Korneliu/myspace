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

database.ref()
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('Error fetching data, e')
  })



export { firebase, database as default };












