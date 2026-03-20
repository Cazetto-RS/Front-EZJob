import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { SecondPage } from "../screens/SecondPage";

const { Navigator, Screen } = createStackNavigator();

export function Navigation() {
  return (
    <Navigator id="mainNavigator" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="segondPage" component={SecondPage} />
    </Navigator>
  );
}
