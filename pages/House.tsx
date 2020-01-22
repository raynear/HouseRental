import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

import { styles } from "../App/Style";

const MoveButton = withNavigation((props: { navigation: NavigationStackProp }) => (
  <Button title="Move" onPress={() => props.navigation.push('Edit')} />
))

function House(props: any) {
  console.log("props", Object.keys(props));

  if (props.loading) return <Text>로딩 중...</Text>;
  if (props.error) return <Text>오류 :</Text>;

  const buildings = props.data.buildings;
  return (
    <Container>
      <Content>
        <List>
          {buildings.map((item, idx) => {
            return <ListItem key={idx} onPress={() => props.navigation.navigate("Edit", { id: item.id, name: item.name, address: item.address })}><Text>{item.id + item.name + item.address}</Text></ListItem>
          })}
        </List>
        <MoveButton />
      </Content>
    </Container >
  );
}

export default withNavigation(House);