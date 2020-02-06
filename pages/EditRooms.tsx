import React from 'react';
import { Content, Form, Item, Label, Input, Button, Text } from "native-base";

export default function EditRooms(props: any) {
  return (
    <Content>
      <Form>
        <Item floatingLabel>
          <Label>{props.buildingName}</Label>
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
                onChangeText={props.editRoom}
              />
            </Item>);
        })}
      </Form>
    </Content>
  );
}