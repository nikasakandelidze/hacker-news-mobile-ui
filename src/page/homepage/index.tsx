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
import { MainContext } from "../helper/context/MainContextProvider";

export const HomePage = () => {
  const { storiesData: stories } = useContext(MainContext);

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
