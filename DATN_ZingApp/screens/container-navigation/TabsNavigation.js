import React from "react";
import HomeScreen from "../home/HomeScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TrendingSongs from "../trending-songs/TrendingSongs";
import TopArtists from "../top-artists/TopArtists";

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveBackgroundColor: "#fff",
        tabBarActiveTintColor: "#ff5b77",
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 60,
          paddingBottom:8
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        headerShown: false,
      }}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={32} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Trending Songs"
        component={TrendingSongs}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="disc" size={32} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Top Artists"
        component={TopArtists}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="fire" size={32} color={color} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}
