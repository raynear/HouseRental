import React from 'react';
import { Content, Item, Label, Input, Button, Text } from 'native-base';

export default function Auth(props: any) {
  return (
    <Content>
      <Text>{props.user && props.user.displayName}</Text>
      <Text>{props.user && props.user.email}</Text>
      <Item floatingLabel>
        <Label>E-mail</Label>
        <Input
          value={props.value.email}
          onChangeText={text => props.onChange("email", text)}
        />
      </Item>
      <Item floatingLabel>
        <Label>Password</Label>
        <Input
          value={props.value.passwordOne}
          onChangeText={text => props.onChange("passwordOne", text)}
          secureTextEntry={true}
        />
      </Item>
      <Item floatingLabel>
        <Label>Password(again)</Label>
        <Input
          value={props.value.passwordTwo}
          onChangeText={text => props.onChange("passwordTwo", text)}
          secureTextEntry={true}
        />
      </Item>
      <Button block info onPress={() => props.doCreateUserWithEmailAndPassword(props.value.email, props.value.passwordOne)}><Text>Signup</Text></Button>
      <Button block info onPress={() => props.doSignInWithEmailAndPassword(props.value.email, props.value.passwordOne)}><Text>Login</Text></Button>
      <Button block info onPress={() => props.doSignOut()}><Text>LogOut</Text></Button>
    </Content>
  );
}