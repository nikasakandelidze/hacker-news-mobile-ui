import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { HomePage } from "./src/page/homepage";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Jobs from "./src/page/jobs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({}) => <Ionicons name="home" size={25} />,
          }}
        />
        <Tab.Screen
          name="Jobs"
          component={Jobs}
          options={{
            tabBarIcon: ({}) => <Ionicons name="settings" size={25} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
