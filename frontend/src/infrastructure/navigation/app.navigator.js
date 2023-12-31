import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import SettingScreen from "../../features/setting/screens/setting.screen";
import BookScreen from "../../features/crudBook/screens/book.screen";
import HikingScreen from "../../features/hiking/screens/hiking.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Book: "book",
  Hiking: "ios-location-sharp",
  Setting: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "green",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Book"
        component={BookScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
      name="Hiking"
      component={HikingScreen}
      options={{
        headerShown: false,
      }}
      />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
