import { View, Text, StyleSheet } from "react-native";
import React from "react";

type Props = {};

const SearchResult = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Search results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
    marginTop: 90,
    width: "100%",
    backgroundColor: "#F6F6F6",
  },
});

export default SearchResult;
