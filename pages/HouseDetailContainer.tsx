import React, { useState } from 'react';
import { withNavigation } from 'react-navigation';

import { useQuery } from '@apollo/react-hooks';

import { GET_ROOMS } from "./GQL";

import HouseDetail from './HouseDetail';

function HouseDetailContainer(props: any) {
  const houseName = props.navigation.getParam('name');

  const [rooms, setRooms] = useState([]);

  const queryVal = useQuery(GET_ROOMS, { variables: { buildingId: props.navigation.getParam('id') } })

  return (
    <HouseDetail
      {...queryVal}
      houseName={houseName}
    />
  );
}

export default withNavigation(HouseDetailContainer);