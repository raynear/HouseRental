import React, { useState } from 'react';

import EditBuilding from "./EditBuilding";

export default function EditBuildingContainer() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <EditBuilding
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
  );
}