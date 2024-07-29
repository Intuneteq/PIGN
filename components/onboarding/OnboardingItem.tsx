import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants/themes";
import { OnboardingSlide } from "../../constants/onboarding";

type Props = {
  item: OnboardingSlide;
};

export default function OnboardingItem({}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <View style={styles.screenImageContainer}>
        <Image
          style={styles.screenImage}
          source={require("../../assets/images/onboarding1.png")}
        />
      </View>
      <Text style={styles.title}>Smart Storage</Text>
      <Text style={styles.description}>
        Smart file management system for saving important files
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: SIZES.width,
  },
  logoContainer: {
    width: 89,
    height: 39,
    marginHorizontal: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  screenImageContainer: {
    width: 220,
    height: 340,
    minHeight: 340,
    marginBottom: 33.5,
  },
  screenImage: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: COLORS.blackBase,
    fontFamily: FONTS.weight500,
    fontSize: SIZES.h1,
    fontWeight: 500,
    marginBottom: 16,
  },
  description: {
    color: COLORS.black100,
    fontFamily: FONTS.weight100,
    fontSize: SIZES.h6,
    maxWidth: 254.54,
    textAlign: "center",
  },
});
