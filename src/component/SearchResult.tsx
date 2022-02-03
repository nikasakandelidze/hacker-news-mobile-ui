import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext } from "react";
import { MainContext } from "../page/helper/context/MainContextProvider";
import SearchResultView from "./SearchResultView";

const SearchResult = ({ input }: { input: string }) => {
  const { jobsData, storiesData } = useContext(MainContext);
  console.log(jobsData);
  console.log(storiesData);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {[...jobsData, ...storiesData]
          .filter((e) => e.title.includes(input))
          .map((e) => (
            <SearchResultView item={e} />
          ))}
      </ScrollView>
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
    backgroundColor: "white",
  },
  scrollViewContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchResult;
