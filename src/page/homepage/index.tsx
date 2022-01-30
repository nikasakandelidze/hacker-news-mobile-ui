import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
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
    backgroundColor: "#F6F6EF",
  },
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
});
