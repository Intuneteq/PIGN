import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  OnboardingStack: undefined;
  AppStack: undefined;
};

export type OnboardingStackParamList = {
  Onboarding: undefined;
};

export type AppStackParamList = {
  Home: undefined;
};

// Navigation Props
export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
