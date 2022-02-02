import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchBar = ({
  toggleFocused,
  blurred,
}: {
  toggleFocused: () => void;
  blurred: boolean;
}) => {
  let inputRef: any = useRef();
  useEffect(() => {
    if (blurred && inputRef.current) {
      inputRef.current.blur();
    }
  }, [blurred]);

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        placeholder="Search"
        style={styles.input}
        keyboardType="default"
        onFocus={() => toggleFocused()}
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
  searchContent: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 2,
    backgroundColor: "red",
    width: "100%",
    height: "100%",
  },
});

export default SearchBar;
