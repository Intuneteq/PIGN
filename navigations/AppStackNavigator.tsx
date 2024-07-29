import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./types";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
