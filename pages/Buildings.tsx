import React from 'react';
import { Container, Content, List, ListItem, Text, Button } from 'native-base';
import { withNavigation } from 'react-navigation';

function Buildings(props: any) {
  if (props.loading) return <Text>로딩 중...</Text>;
  if (props.error) return <Text>오류 :</Text>;

  const buildings = props.data.buildings;
  return (
    <Container>
      <Content>
        <List>
          {buildings.map((item: any, idx: number) => {
            return <ListItem key={idx} onPress={() => props.navigation.navigate("BuildingDetail", { id: item.id, name: item.name, address: item.address })}><Text>{item.id + item.name + item.address}</Text></ListItem>
          })}
        </List>
        <Button onPress={() => props.navigation.push('AddBuilding')}><Text>Add New Building</Text></Button>
      </Content>
    </Container >
  );
}

export default withNavigation(Buildings);