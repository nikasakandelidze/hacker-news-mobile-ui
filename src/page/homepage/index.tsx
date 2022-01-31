import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import StoryView from "../../component/StoryView";
import { Story } from "../../model";
import { fetchStories } from "./service/service";

export const HomePage = () => {
  const [stories, setStories] = useState<Array<Story>>([]);

  const updateStories = async () => {
    const stories: Array<Story> = await fetchStories();
    setStories(stories);
  };

  useEffect(() => {
    updateStories();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>YCombinator News</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {stories.map((story: Story) => (
          <StoryView key={story.id} story={story} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#DAE7EF",
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  title: { fontSize: 35, fontWeight: "800", color: "#FF6600" },
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
});
