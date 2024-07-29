import React from "react";
import { View, StyleSheet, Animated, useWindowDimensions } from "react-native";

import { COLORS } from "../../constants/themes";

type Props = {
  count: number;
  scrollX: Animated.Value;
};

export default function Paginator({ count, scrollX }: Props) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {[...Array(count).keys()].map((item, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["transparent", COLORS.blackBase, "transparent"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, backgroundColor }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  dot: {
    width: 11,
    height: 11,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.blackBase,
    marginHorizontal: 8,
  },
});
