import { StatusBar } from "expo-status-bar";

import Loading from "./components/Loading";

import useLoadFonts from "./hooks/useLoadFonts";
import useOnboarding from "./hooks/useOnboarding";
import MainNavigation from "./navigations/MainNavigation";

export default function App() {
  const { loaded, error } = useLoadFonts();
  const { loading, initialRouteName } = useOnboarding();

  /**
   * Fonts not loaded
   */
  if (loading || initialRouteName === null || (!loaded && !error)) {
    return <Loading />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <MainNavigation />
    </>
  );
}
