import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar, KeyboardAvoidingView, Platform } from "react-native"; //KeyboardAvoidingView ios키보드 쓸때 화면 위치조정
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => alert(`${username}${password}`);
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="white-content" />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : null}
        >
          <InputContainer>
            <Input
              autoCapitalize="none"
              value={firstname}
              placeholder="First Name"
              stateFn={setFirstname}
            />
            <Input
              autoCapitalize="none"
              value={lastname}
              placeholder="Last Name"
              stateFn={setLastname}
            />
            <Input
              autoCapitalize="none"
              value={username}
              placeholder="Username"
              stateFn={setUsername}
            />
            <Input
              value={password}
              placeholder="Password"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
          <Btn text={"Sign Up"} accent onPress={handleSubmit}></Btn>
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
