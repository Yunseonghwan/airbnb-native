import React from "react";
import styled from "styled-components/native";
import { StatusBar, KeyboardAvoidingView, Platform } from "react-native"; //KeyboardAvoidingView ios키보드 쓸때 화면 위치조정
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

export default ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  loading,
}) => {
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="white-content" />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : null}
        >
          <InputContainer>
            <Input
              autoCapitalize="words"
              value={firstName}
              placeholder="First Name"
              stateFn={setFirstName}
            />
            <Input
              autoCapitalize="words"
              value={lastName}
              placeholder="Last Name"
              stateFn={setLastName}
            />
            <Input
              keyboardType={"email-address"}
              autoCapitalize="words"
              value={email}
              placeholder="email"
              stateFn={setEmail}
            />
            <Input
              value={password}
              placeholder="Password"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
          <Btn
            loading={loading}
            text={"Sign Up"}
            accent
            onPress={handleSubmit}
          ></Btn>
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
