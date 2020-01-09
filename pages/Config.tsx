import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { styles } from "../App/Style";

export default function Config(props: any) {
  const hotdogs = props.data.hotdogs;
  console.log("hotdogs", hotdogs[0]);
  return (
    <View style={styles.container}>
      <Text>{hotdogs[2].name}</Text>
    </View>
  );
}