import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { Job } from "../model/index";

const SearchResultView = ({ item }: { item: Job }) => {
  const openUrl = async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      alert(`Sorry can't open this story, try later.`);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => openUrl(item.url)}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.authorContainer}>
        <Text style={styles.author}>By: {item.author}</Text>
        <Text style={styles.author}>Score: {item.score}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 130,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EE6A61",
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    overflow: "scroll",
  },
  titleContainer: {},
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "white",
  },
  authorContainer: {
    marginVertical: 10,
  },
  author: {
    fontSize: 15,
    fontWeight: "500",
    color: "#516365",
  },
});

export default SearchResultView;
