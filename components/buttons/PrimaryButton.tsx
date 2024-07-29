import React from "react";
import { StyleSheet } from "react-native";

import BaseButton from "./BaseButton";
import { COLORS } from "../../constants/themes";

export default function PrimaryButton() {
  return (
    <BaseButton
      style={styles.button}
      textStyle={styles.text}
      onPress={() => {}}
    >
      Get Started
    </BaseButton>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.blackBase,
  },
  text: {
    color: COLORS.whiteBase,
  },
});
