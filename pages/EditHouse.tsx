import React from 'react';
import { Content, Form, Item, Label, Input, Button, Text } from "native-base";

export default function EditHouse(props: any) {
  return (
    <Content>
      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input
            value={props.username}
            onChangeText={text => props.setUsername(text)}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            textContentType="password"
            value={props.password}
            onChangeText={text => props.setPassword(text)}
          />
        </Item>
        <Button block info><Text>Sign in</Text></Button>
      </Form>
    </Content>
  );
}