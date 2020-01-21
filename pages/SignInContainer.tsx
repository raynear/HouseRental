import React, { useState } from 'react';

import EditHouse from "./EditHouse";

export default function EditHouseContainer() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <EditHouse
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
  );
}