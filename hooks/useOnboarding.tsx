import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useOnboarding() {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

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

  return { loading, viewedOnboarding, setOnboarded };
}
