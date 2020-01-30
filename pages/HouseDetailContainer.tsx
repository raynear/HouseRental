import React from 'react';
import { withNavigation, NavigationEvents } from 'react-navigation';
import { useQuery } from '@apollo/react-hooks';

import { GET_ROOMS } from "./GQL";
import HouseDetail from './HouseDetail';

function HouseDetailContainer(props: any) {
  const houseName = props.navigation.getParam('name');
  const id = props.navigation.getParam('id');

  const queryVal = useQuery(GET_ROOMS, { variables: { buildingId: props.navigation.getParam('id') } })

  return (
    <>
      <NavigationEvents
        onDidFocus={payload => queryVal.refetch()}
      />
      <HouseDetail
        {...queryVal}
        houseName={houseName}
        id={id}
      />
    </>
  );
}

export default withNavigation(HouseDetailContainer);