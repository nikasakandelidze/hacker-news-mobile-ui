import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomePage } from "./src/page/homepage";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Jobs from "./src/page/jobs";
import { SafeAreaView, View, Text } from "react-native";
import SearchBar from "./src/component/SearchBar";
import SearchResult from "./src/component/SearchResult";

const Tab = createBottomTabNavigator();

export default function App() {
  const [searchFocused, setFocused] = useState(false);

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
          />
        </View>
      </SafeAreaView>
      {searchFocused && <SearchResult />}
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
}
