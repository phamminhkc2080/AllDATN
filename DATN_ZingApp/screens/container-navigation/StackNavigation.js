import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../start-screen/StartScreen";
import TabsNavigation from "./TabsNavigation";
import CategoriesDetails from "../catog-details/CategoriesDetails";
import Songs, { Song } from "../home/songs/Songs";
import PlayerMusic from "../player/player-detail/PlayerMusic";
import ResultsSearch from "../search/ResultsSearch";
import HeaderHome from "../home/header/HeaderHome";
import ProfileScreen from "../profile/ProfileScreen";
import ArtistsDetail from "../artists-detail/ArtistsDetail";
import PopularSongs from "../home/popular-songs/PopularSongs";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TabsNavigation"
    >
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="TabsNavigation" component={TabsNavigation} />
      <Stack.Screen name="CategoriesDetails" component={CategoriesDetails} />
      <Stack.Screen name="SongData" component={Song} />
      <Stack.Screen name="Songs" component={Songs} />
      <Stack.Screen name="PlayerMusic" component={PlayerMusic} />
      <Stack.Screen name="ResultsSearch" component={ResultsSearch} />
      <Stack.Screen name="HeaderHome" component={HeaderHome} />
      <Stack.Screen name="Frofile" component={ProfileScreen} />
      <Stack.Screen name="ArtistsDetail" component={ArtistsDetail} />
      <Stack.Screen name="PopularSong" component={PopularSongs} />
    
    </Stack.Navigator>
  );
}
