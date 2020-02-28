import React, { useState } from 'react';
import firebase from 'firebase';

import Auth from "./Auth";

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

const doCreateUserWithEmailAndPassword = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
}

const doSignInWithEmailAndPassword = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
}

const doSignOut = () => firebase.auth().signOut();

const doPasswordReset = email => firebase.auth().sendPasswordResetEmail(email);

const doPasswordUpdate = password => firebase.auth().currentUser.updatePassword(password);


export default function AuthContainer(props: any) {
  const [value, setValue] = useState({ email: "", passwordOne: "", passwordTwo: "" });

  function onChange(name, text) {
    setValue({ ...value, [name]: text });
  }

  const user = firebase.auth().currentUser;

  return (
    <Auth
      value={value}
      user={user}
      onChange={onChange}
      doCreateUserWithEmailAndPassword={doCreateUserWithEmailAndPassword}
      doSignInWithEmailAndPassword={doSignInWithEmailAndPassword}
      doSignOut={doSignOut}
      doPasswordReset={doPasswordReset}
      doPasswordUpdate={doPasswordUpdate}
    />
  );
}