import React from "react";
import HomeScreen from "../home/HomeScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

import TrendingSongs from "../trending-songs/TrendingSongs";
import TopArtists from "../top-artists/TopArtists";
import ResultsSearch from "../search/ResultsSearch";
import ResultsSearchArtists from "../search/ResultsSearchArtists";
import ArtistsDetail from "../artists-detail/ArtistsDetail";
import CategoriesDetails from "../catog-details/CategoriesDetails";
import ProfileScreen from "../profile/ProfileScreen";
import DataPlaylist from "../data-playlist/DataPlaylist";
import SongsPlaylist from "../data-playlist/SongsPlaylist";
import SignIn from "../user/SignIn";

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarButton: [
          "ResultsSearch",
          "ResultsSearchArtists",
          "ArtistsDetail",
          "CategoriesDetails",
          "Frofile",
          "DataPlaylist",
          "SongsPlaylist",
          
        ].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
        tabBarInactiveBackgroundColor: "#fff",
        tabBarActiveTintColor: "#ff5b77",
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        headerShown: false,
      })}
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

      <Tab.Screen name="ResultsSearch" component={ResultsSearch} />
      <Tab.Screen
        name="ResultsSearchArtists"
        component={ResultsSearchArtists}
      />
      <Tab.Screen name="ArtistsDetail" component={ArtistsDetail} />
      <Tab.Screen name="CategoriesDetails" component={CategoriesDetails} />
      <Tab.Screen name="Frofile" component={ProfileScreen} />
      <Tab.Screen name="DataPlaylist" component={DataPlaylist} />
      <Tab.Screen name="SongsPlaylist" component={SongsPlaylist} />
    </Tab.Navigator>
  );
}
