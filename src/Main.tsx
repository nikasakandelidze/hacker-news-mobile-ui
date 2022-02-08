import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomePage } from "./page/homepage";
import Ionicons from "react-native-vector-icons/Ionicons";

import Jobs from "./page/jobs";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from "react-native";
import SearchBar from "./component/SearchBar";
import SearchResult from "./component/SearchResult";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainContext } from "./page/helper/context/MainContextProvider";
import Calendar from "./page/calendar";
import { Job, Story } from "./model";
import { fetchJobs } from "./commons/service/jobsService";
import { fetchStories } from "./commons/service/storiesService";

const Tab = createBottomTabNavigator();

const Main = () => {
  const [searchFocused, setFocused] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { input, setInput, setJobsData, setStoriesData } =
    useContext(MainContext);

  const updateJobs = async () => {
    setLoading(true);
    const jobs: Array<Job> = await fetchJobs();
    setJobsData(jobs);
    setLoading(false);
  };

  const updateStories = async () => {
    setLoading(true);
    const stories: Array<Story> = await fetchStories();
    setStoriesData(stories);
    setLoading(false);
  };

  useEffect(() => {
    updateJobs();
    updateStories();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.droidSafeArea}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            style={!searchFocused ? { transform: [{ scale: 0 }] } : {}}
            name="chevron-up-outline"
            size={27}
            onPress={() => {
              setFocused(false);
            }}
          />
          <SearchBar
            toggleFocused={() => {
              setFocused((e) => !e);
            }}
            blurred={!searchFocused}
            setInput={(e) => setInput(e)}
          />
        </View>
      </SafeAreaView>
      {<SearchResult input={input} show={searchFocused} />}
      {loading ? (
        <ActivityIndicator size={"large"} animating={true} color={"##FF6600"} />
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
              tabBarIcon: ({}) => <Ionicons name="home-outline" size={25} />,
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={Calendar}
            options={{
              tabBarIcon: ({}) => (
                <Ionicons name="calendar-outline" size={25} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Jobs"
            component={Jobs}
            options={{
              tabBarIcon: ({}) => <Ionicons name="wallet-outline" size={25} />,
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? 60 : 0,
    marginVertical: 15,
  },
});

export default Main;
