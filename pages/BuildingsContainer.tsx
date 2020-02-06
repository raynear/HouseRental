import React from 'react';
import { NavigationEvents } from 'react-navigation';
import { useQuery } from "@apollo/react-hooks";
import { BUILDINGS } from "./GQL";

import Buildings from "./Buildings";

export default function BuildingsContainer(props: any) {
  const queryVal = useQuery(BUILDINGS);
  return (
    <>
      <NavigationEvents
        onDidFocus={payload => queryVal.refetch()}
      />

      <Buildings
        {...queryVal}
      />
    </>
  );
}