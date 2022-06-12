import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import { request } from "../utils/Request";
import HeaderHome from "./header/HeaderHome";
import PopularSongs from "./popular-songs/PopularSongs";
import { useDispatch, useSelector } from "react-redux";
import { gettopsongs, getcommanedsongs } from "../../redux/actions/songs";
import { gettopartists } from "../../redux/actions/artists";
import { getcategories } from "../../redux/actions/categories";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { dataTopSongs, dataRecommendedSongs, dataTopArtists, dataCategories } =
    useSelector((state) => state);

  // const [dataTopSongs,setDataTopSongs]= useState([]);

  useEffect(() => {
    request
      .get("songs/getTopSong")
      .then((result) => {
        dispatch(gettopsongs(result.data));
      })
      .catch((error) => console.error(error));

    request
      .get("songs/getRecommended")
      .then((result) => {
        dispatch(getcommanedsongs(result.data));
      })
      .catch((error) => console.error(error));

    request
      .get("artists/getTopArtists")
      .then((result) => {
        dispatch(gettopartists(result.data));
      })
      .catch((error) => console.error(error));

    request
      .get("categories/getTopCategoris")
      .then((result) => {
        dispatch(getcategories(result.data));
      })
      .catch((error) => console.error(error));
  }, []);

  // console.log("result  : ", topSongs);
  // console.log("result  : ", dataTopArtists);
  // console.log("result  : ", dataCategories);
   /**
    * khi e goi log o day. thi 
    * - dau tien, component khoi tao thi la 1 lan []
    * - tiep den goi them 1 lan khi component nhan data => 2 lan []
    * - tiep tuc 1 lan nua trong luc API dang duoc goi
    * - lan 4: hien ra data la sau khi dispatch done.
    * yep. hoat dong dung roi
    * toi nay sau 11h nhe. ok =))
    * ok. The toi lai gap nhe =))) byeeeee
    */

  return (
    <View style={styles.container}>
      <HeaderHome navigation={navigation} />

      <ScrollView>
        <PopularSongs
          title="Recommended For You"
          data={dataRecommendedSongs}
          navigation={navigation}
        />
        <PopularSongs
          title="Popular song"
          data={dataTopSongs}
          navigation={navigation}
        />
        <PopularSongs
          title="Top artists"
          data={dataTopArtists}
          navigation={navigation}
        />
        <PopularSongs
          title="Categories"
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
