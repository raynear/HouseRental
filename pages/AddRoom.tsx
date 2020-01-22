import React from 'react';
import { Content, Form, Item, Label, Input, Button, Text } from "native-base";

export default function AddRoom(props: any) {
  return (
    <Content>
      <Form>
        <Item floatingLabel>
          <Label>Name</Label>
          <Input
            value={props.values.name}
            onChangeText={text => props.setValues({ ...props.values, name: text })}
          />
        </Item>
        <Item floatingLabel>
          <Label>Floor</Label>
          <Input
            value={props.values.floor}
            onChangeText={text => props.setValues({ ...props.values, floor: text })}
          />
        </Item>
        <Button block info onPress={props.addRoom}><Text>Add Rooms</Text></Button>
      </Form>
    </Content>
  );
}