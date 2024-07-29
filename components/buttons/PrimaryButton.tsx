import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";

import BaseButton from "./BaseButton";
import { COLORS } from "../../constants/themes";

type Props = {
  onPress: () => void;
  children: ReactNode;
};

export default function PrimaryButton({ onPress, children }: Props) {
  return (
    <BaseButton style={styles.button} textStyle={styles.text} onPress={onPress}>
      {children}
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
