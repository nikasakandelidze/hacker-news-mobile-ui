import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { StyleSheet, ScrollView, Platform, Dimensions } from "react-native";
import React, { useContext, useEffect } from "react";
import { MainContext } from "../page/helper/context/MainContextProvider";
import SearchResultView from "./SearchResultView";

const SearchResult = ({ input, show }: { input: string; show: boolean }) => {
  const { jobsData, storiesData } = useContext(MainContext);
  const height = useSharedValue(0);

  useEffect(() => {
    if (height.value == 0 && show) {
      height.value = 0.5 * Dimensions.get("window").height;
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
    <Animated.View
      style={[
        styles.container,
        animationStyle,
        show ? { paddingBottom: 20 } : {},
      ]}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {[...jobsData, ...storiesData]
          .filter((e) => e.title.toLowerCase().includes(input.toLowerCase()))
          .map((e) => (
            <SearchResultView key={e.id} item={e} />
          ))}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 0,
    marginTop: Platform.OS == "android" ? 0 : 0,
    width: "100%",
    backgroundColor: "#DAE7EF",
  },
  scrollViewContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchResult;
