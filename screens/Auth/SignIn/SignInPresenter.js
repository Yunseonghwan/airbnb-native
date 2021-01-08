import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import Btn from "../../../components/Auth/Btn";
import Input from "../../../components/Auth/Input";
import DismissKeyboard from "../../../components/DismissKeyboard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({ email, setEmail, password, setPassword, handleSubmit }) => {
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="white-content" />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : null}
        >
          <InputContainer>
            <Input
              value={email}
              placeholder="Email"
              keyboardType="email-address"
              stateFn={setEmail}
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
