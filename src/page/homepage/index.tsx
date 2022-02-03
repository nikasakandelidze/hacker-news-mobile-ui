import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import StoryView from "../../component/StoryView";
import { Story } from "../../model";
import { fetchStories } from "./service/service";
import { MainContext } from "../helper/context/MainContextProvider";

export const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { storiesData: stories, setStoriesData } = useContext(MainContext);
  const updateStories = async () => {
    setLoading(true);
    const stories: Array<Story> = await fetchStories();
    setStoriesData(stories);
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
