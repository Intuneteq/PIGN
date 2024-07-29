import {
  Animated,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  ViewToken,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import slides, { OnboardingSlide } from "../constants/onboarding";
import { SIZES } from "../constants/themes";
import OnboardingItem from "../components/onboarding/OnboardingItem";
import { useRef, useState } from "react";
import Paginator from "../components/ui/Paginator";
import PrimaryButton from "../components/buttons/PrimaryButton";
import TertiaryButton from "../components/buttons/TertiaryButton";

type ViewableItemInfo = {
  viewableItems: ViewToken<OnboardingSlide>[];
  changed: ViewToken<OnboardingSlide>[];
};

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }: ViewableItemInfo) => {
    if (
      viewableItems &&
      viewableItems.length > 0 &&
      viewableItems[0].index !== null
    ) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.onboarding}>
          <FlatList
            data={slides}
            renderItem={({ item }) => <OnboardingItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            // bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slideRef}
          />
        </View>
        <View style={styles.footer}>
          <Paginator count={slides.length} scrollX={scrollX} />

          <View style={styles.buttons}>
            <PrimaryButton />
            <TertiaryButton />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    width: '80%',
    marginHorizontal: 'auto'
  },
});
