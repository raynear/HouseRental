import React from 'react';
import { withNavigation, NavigationEvents } from 'react-navigation';
import { useQuery } from '@apollo/react-hooks';

import { ROOMS } from "./GQL";
import BuildingDetail from './BuildingDetail';

function BuildingDetailContainer(props: any) {
  const buildingName = props.navigation.getParam('name');
  const id = props.navigation.getParam('id');

  const queryVal = useQuery(ROOMS, { variables: { buildingId: props.navigation.getParam('id') } })

  return (
    <>
      <NavigationEvents
        onDidFocus={payload => queryVal.refetch()}
      />
      <BuildingDetail
        {...queryVal}
        buildingName={buildingName}
        id={id}
      />
    </>
  );
}

export default withNavigation(BuildingDetailContainer);