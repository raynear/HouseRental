import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

import { styles } from "../App/Style";

const MoveButton = withNavigation((props: { navigation: NavigationStackProp }) => (
  <Button title="Move" onPress={() => props.navigation.push('Edit')} />
))

export default function House(props: any) {
  if (props.loading) return <Text>로딩 중...</Text>;
  if (props.error) return <Text>오류 :</Text>;

  const buildings = props.data.buildings;
  return (
    <Container>
      <Content>
        <List>
          {buildings.map((item, idx) => {
            return <ListItem key={idx} onPress={() => props.moveToBuilding(idx)}><Text>{item.name}</Text><Text>{item.address}</Text></ListItem>
          })}
        </List>
        <MoveButton />
      </Content>
    </Container >
  );
}