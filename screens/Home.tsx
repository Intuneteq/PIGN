import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
   async function clearOnboardingHandler() {
      try {
         await AsyncStorage.removeItem("@viewedOnboarding");
      } catch (error) {
         
      }
   }
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={clearOnboardingHandler}>
         <Text>clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
