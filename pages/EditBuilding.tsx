import React from 'react';
import { Content, Form, Item, Label, Input, Button, Text } from "native-base";

export default function EditBuilding(props: any) {
  return (
    <Content>
      <Form>
        <Item floatingLabel>
          <Label>Building Name</Label>
          <Input
            value={props.buildingName}
            onChangeText={text => props.setBuildingName(text)}
          />
        </Item>
        <Button block info onPress={props.addRoom}><Text>Add Rooms</Text></Button>
        {props.rooms.map((item: any, idx: number) => {
          return (
            <Item floatingLabel key={idx}>
              <Label>Room {idx.toString()}</Label>
              <Input
                secureTextEntry={true}
                value={item.name}
                onChangeText={(test) => props.handleChange(test, idx)}
              />
            </Item>);
        })}
      </Form>
    </Content>
  );
}