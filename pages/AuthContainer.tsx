import React, { useState } from 'react';

import Auth from "./Auth";

import firebase from "./firebase";

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
  if (user) {
    console.log("token", user.uid)
    console.log("token", user.metadata)
  }

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