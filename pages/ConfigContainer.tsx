import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_NAME } from './GQL';
import { Text, View } from 'react-native';

import Config from "./Config";

export default function ConfigContainer() {
  const { loading, error, data } = useQuery(GET_NAME);
  if (loading) return <Text>로딩 중...</Text>;
  if (error) return <Text>오류 :</Text>;

  return (
    <Config
      data={data}
    />
  );
}