import React, { useState } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image); //pre image
    } else {
      return Asset.fromModule(image).downloadAsync(); //file image
    }
  });

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinisth = () => setIsReady(true);
  const loadAssets = async () => {
    const images = [
      require("./assets/loginBg.jpg"),
      "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png",
    ];
    const fonts = [Ionicons.font];
    const imagePromises = cacheImages(images);
    const fontPromises = cacheFonts(fonts);
    return Promise.all([...fontPromises, ...imagePromises]);
  };
  return isReady ? (
    <Text>I'm ready</Text>
  ) : (
    <AppLoading
      onError={console.error}
      onFinish={handleFinisth}
      startAsync={loadAssets}
    />
  );
}
