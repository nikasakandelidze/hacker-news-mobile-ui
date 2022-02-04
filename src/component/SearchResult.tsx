import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { StyleSheet, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
import { MainContext } from "../page/helper/context/MainContextProvider";
import SearchResultView from "./SearchResultView";

const SearchResult = ({ input, show }: { input: string; show: boolean }) => {
  const { jobsData, storiesData } = useContext(MainContext);
  const height = useSharedValue(0);

  useEffect(() => {
    if (height.value == 0 && show) {
      height.value = 400;
    } else {
      height.value = 0;
    }
  }, [show]);

  const animationStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, { duration: 250 }),
    };
  });

  return (
    <Animated.View style={[styles.container, animationStyle]}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {[...jobsData, ...storiesData]
          .filter((e) => e.title.includes(input))
          .map((e) => (
            <SearchResultView item={e} />
          ))}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    height: 0,
    marginTop: 90,
    width: "100%",
    backgroundColor: "#BDD7D6",
  },
  scrollViewContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchResult;
