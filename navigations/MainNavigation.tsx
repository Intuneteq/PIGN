import React, { useEffect, useState } from "react";
import { RootStackParamList } from "./types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingStackNavigator from "./OnboardingStackNavigator";
import useOnboarding from "../hooks/useOnboarding";
import AppStackNavigator from "./AppStackNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigation() {
  const { initialRouteName } = useOnboarding();

  if (initialRouteName === null) {
    return;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initialRouteName}
      >
        <Stack.Screen name="AppStack" component={AppStackNavigator} />
        <Stack.Screen
          name="OnboardingStack"
          component={OnboardingStackNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
