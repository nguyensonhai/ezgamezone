import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { globalStyles } from "../styles/global";

export default function About() {
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={globalStyles.container}
    >
      <Text style={globalStyles.titleText}>
        I was just an only child 👱🏻 of the universe 🌚. And then I found you
        💙🌈. You are the sun 🌞 and I am just the planets 🌏 spinning around
        you 💫 💞
      </Text>
    </ImageBackground>
  );
}
