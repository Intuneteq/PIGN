import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Home from "./screens/Home";
import Onboarding from "./screens/Onboarding";

import Loading from "./components/Loading";

import useLoadFonts from "./hooks/useLoadFonts";
import useOnboarding from "./hooks/useOnboarding";

export default function App() {
  const { loaded, error } = useLoadFonts();
  const { loading, viewedOnboarding } = useOnboarding();

  /**
   * Fonts not loaded
   */
  if (loading || (!loaded && !error)) {
    return <Loading />;
  }

  return (
    <>
      <StatusBar style="auto" />
      {viewedOnboarding ? (
        <Home />
      ) : (
        <View style={styles.container}>
          <Onboarding />
        </View>
      )}
    </>
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
