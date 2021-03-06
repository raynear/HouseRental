import React, { useState } from 'react';
import { withNavigation } from "react-navigation";
import { useMutation } from "@apollo/react-hooks";

import AddRoom from "./AddRoom";
import { ADD_ROOM } from "./GQL";

function AddRoomContainer(props: any) {
  const buildingId = props.navigation.getParam('id');
  console.log("buildingId", buildingId);
  const [values, setValues] = useState({ name: "", floor: "" });

  const [mutateAddRoom] = useMutation(ADD_ROOM);

  function addRoom() {
    mutateAddRoom({ variables: { buildingId: buildingId, name: values.name, floor: parseInt(values.floor) } }).then((result) => {
      console.log("mutate complete", result);
      props.navigation.goBack();
    });
    console.log("Add Room");
  }

  return (
    <AddRoom
      values={values}
      setValues={setValues}
      addRoom={addRoom}
    />
  );
}

export default withNavigation(AddRoomContainer);