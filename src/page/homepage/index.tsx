import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import StoryView from "../../component/StoryView";
import { Story } from "../../model";
import { fetchStories } from "./service/service";

export const HomePage = () => {
  const [stories, setStories] = useState<Array<Story>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const updateStories = async () => {
    setLoading(true);
    const stories: Array<Story> = await fetchStories();
    setStories(stories);
    setLoading(false);
  };

  useEffect(() => {
    updateStories();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {loading && (
          <ActivityIndicator
            size={"large"}
            animating={true}
            color={"##FF6600"}
          />
        )}
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
