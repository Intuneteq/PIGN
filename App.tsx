import { StatusBar } from "expo-status-bar";

import Loading from "./components/Loading";

import useLoadFonts from "./hooks/useLoadFonts";
import useOnboarding from "./hooks/useOnboarding";
import MainNavigation from "./navigations/MainNavigation";

export default function App() {
  const { loaded, error } = useLoadFonts();
  const { loading, initialRouteName } = useOnboarding();

  /**
   * loading: checking onboarding state
   * initialRouteName: The stack to be routed to - AppStack or OnboardingStack. If null, App is still loading
   * loaded: fonts loaded state
   * error: error from trying to load the fonts
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
