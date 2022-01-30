import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Jobs = () => {
  return (
    <View style={styles.container}>
      <Text>jobs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#F6F6EF",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Jobs;
