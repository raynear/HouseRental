import React from 'react';
import { withNavigation } from 'react-navigation';
import { Content, Header, List, ListItem, H2, Text, Button } from "native-base";

function HouseDetail(props: any) {
  if (props.loading) return <Text>Loading</Text>
  if (props.error) return <Text>Error</Text>

  console.log("data", props.data);

  return (
    <>
      <Header>
        <H2 style={{ textAlign: "center", textAlignVertical: "center", color: "#ffffff" }}>{props.houseName}</H2>
      </Header>
      <Content>
        <List>
          <ListItem>
            <Text>test</Text>
          </ListItem>
        </List>
      </Content>
      <Button onPress={() => props.navigation.push('AddRoom')}><Text>Add New Room</Text></Button>
    </>
  );
}

export default withNavigation(HouseDetail);