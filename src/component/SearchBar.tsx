import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        keyboardType="default"
      />
      <TouchableOpacity
        onPress={() => Alert.alert("Searching")}
        style={{ marginLeft: 15 }}
      >
        <Ionicons name="search" size={27} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  input: {
    backgroundColor: "#DAE7EF",
    width: "75%",
    borderRadius: 10,
    fontSize: 23,
    padding: 5,
  },
});

export default SearchBar;
