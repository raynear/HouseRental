import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { GET_BUILDINGS } from "./GQL";

import House from "./House";

export default function HouseContainer(props: any) {
  const queryVal = useQuery(GET_BUILDINGS);
  return (
    <House
      {...queryVal}
    />
  );
}