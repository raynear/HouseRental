import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from "@apollo/react-hooks";
import { GET_NAME } from "./GQL";

import House from "./House";

export default function HouseContainer() {
  function moveToBuilding(params) {
    console.log("test", queryVal.data.buildings[params]);
  }
  const queryVal = useQuery(GET_NAME);
  return (
    <House
      {...queryVal}
      moveToBuilding={moveToBuilding}
    />
  );
}