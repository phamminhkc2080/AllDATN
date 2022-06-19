import React from "react";
import { View,Dimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../start-screen/StartScreen";
import TabsNavigation from "./TabsNavigation";
import CategoriesDetails from "../catog-details/CategoriesDetails";
import PlayerMusic from "../player/player-detail/PlayerMusic";
import ResultsSearch from "../search/ResultsSearch";
import HeaderHome from "../home/header/HeaderHome";
import ProfileScreen from "../profile/ProfileScreen";
import ArtistsDetail from "../artists-detail/ArtistsDetail";
import PopularSongs from "../home/popular-songs/PopularSongs";
import Song from "../home/songs/Song";
import SignIn from "../user/SignIn";
import ListItem from "../components/ListItem";
import ResultsSearchArtists from "../search/ResultsSearchArtists";
import PlaylistItem from "../components/PlaylistItem";
import DataPlaylist from "../data-playlist/DataPlaylist";
import SongsPlaylist from "../data-playlist/SongsPlaylist";

const Stack = createNativeStackNavigator();

const { width, height } = Dimensions.get("screen");

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
      <Stack.Screen name="PlayerMusic" component={PlayerMusic} />
      <Stack.Screen name="ResultsSearch" component={ResultsSearch} />
      <Stack.Screen name="ResultsSearchArtists" component={ResultsSearchArtists} />
      <Stack.Screen name="HeaderHome" component={HeaderHome} />
      <Stack.Screen name="Frofile" component={ProfileScreen} />
      <Stack.Screen name="ArtistsDetail" component={ArtistsDetail} />
      <Stack.Screen name="PopularSong" component={PopularSongs} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ListItem" component={ListItem} />
      <Stack.Screen name="PlayListItem" component={PlaylistItem} />
      <Stack.Screen name="DataPlaylist" component={DataPlaylist} />
      <Stack.Screen name="SongsPlaylist" component={SongsPlaylist} />
      
      {/* <Stack.Screen name="MiniPlayMusic" component={MiniPlayMusic} />
      <Stack.Screen name="StoreNavigation" component={Router} /> */}
      

    </Stack.Navigator>
  );
}
