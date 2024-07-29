import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const COLORS = {
  whiteBase: "#FFFFFF",
  black100: "#4D4D4D",
  blackBase: "#1A1A1A",
};

export const FONTS = {
  weight100: "HankenGrotesk_100Thin",
  weight200: "HankenGrotesk_200ExtraLight",
  weight300: "HankenGrotesk_300Light",
  weight400: "HankenGrotesk_400Regular",
  weight500: "HankenGrotesk_500Medium",
  weight600: "HankenGrotesk_600SemiBold",
  weight700: "HankenGrotesk_700Bold",
  weight800: "HankenGrotesk_800ExtraBold",
  weight900: "HankenGrotesk_900Black",
};

export const SIZES = {
  h1: 24,
  h2: 22,
  h3: 10,
  h4: 18,
  h5: 16,
  h6: 14,
  width,
  height,
};
