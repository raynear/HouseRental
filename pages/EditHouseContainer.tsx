import React, { useState } from 'react';

import EditHouse from "./EditHouse";

export default function EditHouseContainer() {
  const [houseName, setHouseName] = useState("");
  const [rooms, setRooms] = useState([{ name: "", floor: "" }]);

  function addRoom() {
    let tmpRooms = rooms;
    tmpRooms.push({ name: "", floor: "" })
    setRooms(tmpRooms);
  }

  function editRoom(param: any) {
    console.log("!!!!!!!!!!!!!!", param);
  }

  return (
    <EditHouse
      housename={houseName}
      setHouseName={setHouseName}
      rooms={rooms}
      setRooms={setRooms}
      addRoom={addRoom}
    />
  );
}