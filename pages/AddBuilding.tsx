import React from 'react';
import { Content, Form, Item, Label, Input, Button, Text } from "native-base";

export default function AddBuilding(props: any) {
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
          <Label>Address</Label>
          <Input
            value={props.values.address}
            onChangeText={text => props.setValues({ ...props.values, address: text })}
          />
        </Item>
        <Button block info onPress={props.addBuilding}><Text>Add Building</Text></Button>
      </Form>
    </Content>
  );
}