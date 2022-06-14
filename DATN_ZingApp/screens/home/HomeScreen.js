import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView,Dimensions } from "react-native";
import { request } from "../utils/Request";
import HeaderHome from "./header/HeaderHome";
import PopularSongs from "./popular-songs/PopularSongs";
import { useDispatch, useSelector } from "react-redux";
import { gettopsongs, getcommanedsongs } from "../../redux/actions/songs";
import { gettopartists } from "../../redux/actions/artists";
import { getcategories } from "../../redux/actions/categories";
import { TITLE_CATEGORIES, TITLE_POPULAR_SONGS, TITLE_RECOMMENDED_SONGS, TITLE_TOP_ARTISTS } from "../../constansts/common";

const { width, height } = Dimensions.get("screen");

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { dataTopSongs, dataRecommendedSongs, dataTopArtists, dataCategories } =
    useSelector((state) => state);

  // const [dataTopSongs,setDataTopSongs]= useState([]);

  useEffect(() => {
    request
      .get("/songs/getTopSong")
      .then((result) => {
        dispatch(gettopsongs(result.data));
      })
      .catch((error) => console.error(error));

    request
      .get("/songs/getRecommended")
      .then((result) => {
        dispatch(getcommanedsongs(result.data));
      })
      .catch((error) => console.error(error));

    request
      .get("/artists/getTopArtists")
      .then((result) => {
        dispatch(gettopartists(result.data));
      })
      .catch((error) => console.error(error));

    request
      .get("/categories/getTopCategoris")
      .then((result) => {
        dispatch(getcategories(result.data));
      })
      .catch((error) => console.error(error));
  }, []);



  return (
    <View style={styles.container}>
      <HeaderHome navigation={navigation} />

      <ScrollView>
        <PopularSongs
          title={TITLE_RECOMMENDED_SONGS}
          data={dataRecommendedSongs}
          navigation={navigation}
        />
        <PopularSongs
          title={TITLE_POPULAR_SONGS}
          data={dataTopSongs}
          navigation={navigation}
        />
        <PopularSongs
          title={TITLE_TOP_ARTISTS}
          data={dataTopArtists}
          navigation={navigation}
        />
        <PopularSongs
          title={TITLE_CATEGORIES}
          data={dataCategories}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    margin: 10,
    marginLeft: 15,
  },
});
