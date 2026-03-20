import React from "react";
import { View } from "react-native";
import styles from "../style/StyleSecondPage";

export function SecondPage({navigation}): any {

  function navToHome() {
    navigation.navigate("Home");
  }

  return <View style={styles.container}></View>;
}
