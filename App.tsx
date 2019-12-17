import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { BottomNavigation } from "react-native-material-ui";

import { styles } from "./App/Style";
import HouseContainer from "./pages/HouseContainer";

export default function App() {
  const [active, setActive] = useState("");
  return (
    <>
      {active === "house" && <HouseContainer />}
      {active !== "house" && <View style={styles.container}>
        <Text>Hello World!!</Text>
      </View>
      }
      <BottomNavigation active={active} hidden={false}>
        <BottomNavigation.Action
          key="house"
          icon="home"
          label="House"
          onPress={() => setActive("house")}
        />
        <BottomNavigation.Action
          key="people"
          icon="people"
          label="People"
          onPress={() => setActive("people")}
        />
        <BottomNavigation.Action
          key="rent"
          icon="bookmark"
          label="Rent"
          onPress={() => setActive("rent")}
        />
        <BottomNavigation.Action
          key="config"
          icon="settings"
          label="Config"
          onPress={() => setActive("config")}
        />
      </BottomNavigation>
    </>
  );
}

