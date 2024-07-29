import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useOnboarding() {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);
  const [initialRouteName, setInitialRouteName] = useState<
    "OnboardingStack" | "AppStack" | null
  >(null);

  async function checkOnboardingHandler() {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");

      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (error) {
      console.log("Error @CheckOnboarding: ", error);
    } finally {
      setLoading(false);
    }
  }

  async function setOnboarded() {
    try {
      await AsyncStorage.setItem("@viewedOnboarding", "true");
    } catch (error) {
      console.log("Error @setItem: ", error);
    }
  }

  useEffect(() => {
    checkOnboardingHandler();
  }, []);

  useEffect(() => {
    if (!loading) {
      setInitialRouteName(viewedOnboarding ? "AppStack" : "OnboardingStack");
    }
  }, [loading, viewedOnboarding]);

  return { initialRouteName, loading, viewedOnboarding, setOnboarded };
}
