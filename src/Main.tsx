import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomePage } from "./page/homepage";
import Ionicons from "react-native-vector-icons/Ionicons";

import Jobs from "./page/jobs";
import { SafeAreaView, View, Text } from "react-native";
import SearchBar from "./component/SearchBar";
import SearchResult from "./component/SearchResult";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainContext } from "./page/helper/context/MainContextProvider";

const Tab = createBottomTabNavigator();

const Main = () => {
  const [searchFocused, setFocused] = useState(false);

  const { input, setInput } = useContext(MainContext);

  return (
    <NavigationContainer>
      <SafeAreaView style={{ marginVertical: 15 }}>
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
      {searchFocused && <SearchResult input={input} />}
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({}) => <Ionicons name="home" size={25} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Jobs"
          component={Jobs}
          options={{
            tabBarIcon: ({}) => <Ionicons name="settings" size={25} />,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;