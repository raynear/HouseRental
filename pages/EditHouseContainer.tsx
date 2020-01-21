import React, { useState } from 'react';

import EditHouse from "./EditHouse";

export default function EditHouseContainer() {
  const [houseName, setHouseName] = useState("");
  const [rooms, setRooms] = useState([{ name: "", floor: "" }]);
  const [roomCnt, setRoomCnt] = useState(0);

  function addRoom() {
    let tmpRooms = rooms;
    tmpRooms.push({ name: "", floor: "" })
    setRooms(tmpRooms);
    setRoomCnt(tmpRooms.length);
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
      editRoom={editRoom}
    />
  );
}