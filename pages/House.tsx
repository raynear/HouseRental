import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { withNavigation } from "react-navigation";
import { NavigationStackProp } from "react-navigation-stack";

import { styles } from "../App/Style";

const MoveButton = withNavigation((props: { navigation: NavigationStackProp }) => (
  <Button title="Move" onPress={() => props.navigation.push('Edit')} />
))

export default function House(props: any) {
  return (
    <View style={styles.container}>
      <Text>House</Text>
      <MoveButton />
    </View>
  );
}