import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

// import {} from "themes";

import grotesk from "@expo-google-fonts/hanken-grotesk";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "./screens/Onboarding";
import OnboardingItem from "./components/onboarding/OnboardingItem";

export default function App() {
  // const { useFonts, ...rest } = grotesk;
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  // const [loaded, error] = useFonts({ ...rest });

  // useEffect(() => {
  //   if (loaded || error) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded, error]);

  useEffect(() => {
    async function checkFirstLaunch() {
      const hasLaunched = await AsyncStorage.getItem("hasLaunched");

      if (hasLaunched === null) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }

    checkFirstLaunch();
  }, []);

  /**
   * Fonts not loaded
   */
  // if (!loaded && !error) {
  //   return null; // Return Loading Spinner
  // }

  if (isFirstLaunch === null) {
    return null; // or a loading spinner
  }

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <StatusBar style="auto" />
      {/* <OnboardingItem /> */}
      <Onboarding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
