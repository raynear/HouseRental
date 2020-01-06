import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { styles } from "../App/Style";
//import Auth from "../auth";
import GoogleAuth from "./GoogleAuth";

export default function Config() {
  return (
    <View style={styles.container}>
      <Text>Config</Text>
      <GoogleAuth />
    </View>
  );
}