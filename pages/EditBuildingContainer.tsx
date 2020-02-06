import React, { useState } from 'react';

import EditBuilding from "./EditBuilding";
import { withNavigation } from 'react-navigation';

function EditBuildingContainer(props: any) {
  console.log("param test", props.navigation.getParam('id'), props.navigation.getParam('address'))
  const name = props.navigation.getParam('name');
  console.log("name", name);
  const [buildingName, setBuildingName] = useState(name);
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
    <EditBuilding
      buildingName={buildingName}
      handleChange={handleChange}
      setBuildingName={setBuildingName}
      rooms={rooms}
      setRooms={setRooms}
      addRoom={addRoom}
      editRoom={editRoom}
    />
  );
}

export default withNavigation(EditBuildingContainer);