import React, { useState } from 'react';

import EditHouse from "./EditHouse";
import { withNavigation } from 'react-navigation';

function EditHouseContainer(props: any) {
  console.log("param test", props.navigation.getParam('id'), props.navigation.getParam('address'))
  const name = props.navigation.getParam('name');
  console.log("name", name);
  const [houseName, setHouseName] = useState(name);
  const [rooms, setRooms] = useState([{ name: "", floor: "" }]);
  const [roomCnt, setRoomCnt] = useState(0);

  const handleChange = (test: any) => {
    console.log("handleChange params", test);
  }

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
      houseName={houseName}
      handleChange={handleChange}
      setHouseName={setHouseName}
      rooms={rooms}
      setRooms={setRooms}
      addRoom={addRoom}
      editRoom={editRoom}
    />
  );
}

export default withNavigation(EditHouseContainer);