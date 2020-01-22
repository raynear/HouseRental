import React, { useState } from 'react';

import AddRoom from "./AddRoom";

export default function AddRoomContainer() {
  const [values, setValues] = useState({ name: "", floor: "" });

  function addRoom() {
    console.log("Add Room", values);
  }

  return (
    <AddRoom
      values={values}
      setValues={setValues}
      addRoom={addRoom}
    />
  );
}