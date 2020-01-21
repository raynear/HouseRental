import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { styles } from "../App/Style";

export default function Config(props: any) {
  const buildings = props.data.buildings;
  console.log("hotdogs", buildings);
  return (
    <View style={styles.container}>
      {buildings.map((aBuilding, idx) => {
        return <Text key={idx}>{aBuilding.name}</Text>
      })}
    </View>
  );
}