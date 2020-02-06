import React, { useState } from 'react';
import { withNavigation } from "react-navigation";
import { useMutation } from "@apollo/react-hooks";

import AddBuilding from "./AddBuilding";
import { ADD_BUILDING } from "./GQL";

function AddBuildingContainer(props: any) {
  const buildingId = props.navigation.getParam('id');
  console.log("buildingId", buildingId);
  const [values, setValues] = useState({ name: "", address: "" });

  const [mutateAddBuilding] = useMutation(ADD_BUILDING);

  function addBuilding() {
    mutateAddBuilding({ variables: { name: values.name, address: values.address } }).then((result) => {
      console.log("mutate complete", result);
      props.navigation.goBack();
    });
    console.log("Add Building");
  }

  return (
    <AddBuilding
      values={values}
      setValues={setValues}
      addBuilding={addBuilding}
    />
  );
}

export default withNavigation(AddBuildingContainer);