import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar, KeyboardAvoidingView, Platform } from "react-native";
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
        </KeyboardAvoidingView>
        <Btn text={"Sign In"} accent onPress={handleSubmit}></Btn>
      </Container>
    </DismissKeyboard>
  );
};
