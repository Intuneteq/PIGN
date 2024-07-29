import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BaseButton from "./BaseButton";
import { COLORS } from "../../constants/themes";

export default function TertiaryButton() {
  return (
    <BaseButton textStyle={styles.text} onPress={() => {}}>
      Log in
    </BaseButton>
  );
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.black100,
  },
});
