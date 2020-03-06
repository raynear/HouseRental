import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB3reEU7SqY76OeIUA7RF2-JdFPrL11doU",
  authDomain: "house-rental-8c426.firebaseapp.com",
  databaseURL: "https://house-rental-8c426.firebaseio.com",
  projectId: "house-rental-8c426",
  storageBucket: "house-rental-8c426.appspot.com",
  messagingSenderId: "37988569917",
  appId: "1:37988569917:web:8ceb9c4392339dc994ab54",
  measurementId: "G-777DBD9DND"
};

firebase.initializeApp(firebaseConfig);

export default firebase;