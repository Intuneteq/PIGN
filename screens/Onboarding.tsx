import { useRef } from "react";
import {
  Animated,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import { SIZES } from "../constants/themes";
import slides from "../constants/onboarding";

import Paginator from "../components/ui/Paginator";
import PrimaryButton from "../components/buttons/PrimaryButton";
import TertiaryButton from "../components/buttons/TertiaryButton";
import OnboardingItem from "../components/onboarding/OnboardingItem";

import useOnboarding from "../hooks/useOnboarding";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProp } from "../navigations/types";

export default function Onboarding() {
  const { setOnboarded } = useOnboarding();
  const navigation = useNavigation<RootNavigationProp>();

  function getStartedHandler() {
    setOnboarded();
    navigation.navigate("AppStack");
  }

  function loginHandler() {
    setOnboarded();
    navigation.navigate("AppStack");
  }

  const slideRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.onboarding}>
            <FlatList
              data={slides}
              renderItem={({ item }) => <OnboardingItem item={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              viewabilityConfig={viewConfig}
              ref={slideRef}
            />
          </View>
          <View style={styles.footer}>
            <Paginator count={slides.length} scrollX={scrollX} />

            <View style={styles.buttons}>
              <PrimaryButton onPress={getStartedHandler}>
                Get Started
              </PrimaryButton>
              <TertiaryButton onPress={loginHandler}>Log in</TertiaryButton>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    paddingTop: 27,
    paddingBottom: 17,
    width: SIZES.width,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  onboarding: {
    flex: 3,
  },
  footer: {
    flex: 1,
    width: "100%",
  },
  buttons: {
    marginTop: 67,
    width: "80%",
    marginHorizontal: "auto",
  },
});
