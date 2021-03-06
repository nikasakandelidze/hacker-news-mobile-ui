import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { Story } from "../model/index";

const StoryView = ({ story }: { story: Story }) => {
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
      onPress={() => openUrl(story.url)}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{story.title}</Text>
      </View>
      <View style={styles.authorContainer}>
        <Text style={styles.author}>By: {story.author}</Text>
        <Text style={styles.author}>Score: {story.score}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    overflow: "scroll",
  },
  titleContainer: {},
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  authorContainer: {
    marginVertical: 10,
  },
  author: {
    fontSize: 15,
    fontWeight: "500",
  },
});

export default StoryView;
