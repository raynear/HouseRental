import React, { useState } from 'react';

import EditRooms from "./EditRooms";

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
    <EditRooms
      housename={houseName}
      setHouseName={setHouseName}
      rooms={rooms}
      setRooms={setRooms}
      addRoom={addRoom}
      editRoom={editRoom}
    />
  );
}