// 다른 영역 터치시 keyboard 해제 이벤트

import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const DimissKeyboard = ({ children }) => {
  const onPress = () => Keyboard.dismiss();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DimissKeyboard;
