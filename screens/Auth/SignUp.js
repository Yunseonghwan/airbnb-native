import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar, KeyboardAvoidingView, Platform } from "react-native"; //KeyboardAvoidingView ios키보드 쓸때 화면 위치조정
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import { isEmail } from "../../utils";
import { createAccount } from "../../api";
import api from "../../api";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({ navigation: { navigate } }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isFormValid = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("All fields are required.");
      return false;
    }
    if (!isEmail(email)) {
      alert("Please add a valid email.");
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (!isFormValid()) {
      return;
    }
    setLoading(true);
    try {
      const { status } = await api.createAccount({
        first_name: firstName,
        last_name: lastName,
        email,
        username: email,
        password,
      });
      if (status === 201) {
        alert("Account created. Sign in, please.");
        navigate("SignIn", { email, password });
      }
    } catch (e) {
      alert("The email is taken");
      console.warn(e);
    } finally {
      setLoading(false);
    }
  };

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
