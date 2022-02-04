import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet } from "react-native";
import Main from "./src/Main";
import { MainContextProvider } from "./src/page/helper/context/MainContextProvider";

export default function App() {
  return (
    <View style={styles.container}>
      <MainContextProvider>
        <Main />
      </MainContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
