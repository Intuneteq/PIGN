import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";

import BaseButton from "./BaseButton";
import { COLORS } from "../../constants/themes";

type Props = {
  onPress: () => void;
  children: ReactNode;
};

export default function TertiaryButton({ onPress, children }: Props) {
  return (
    <BaseButton textStyle={styles.text} onPress={onPress}>
      {children}
    </BaseButton>
  );
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.black100,
  },
});
