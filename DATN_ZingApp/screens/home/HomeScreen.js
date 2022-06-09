import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { request } from "../utils/Request";
import HeaderHome from "./header/HeaderHome";
import PopularSongs from "./popular-songs/PopularSongs";

export default function HomeScreen({ navigation }) {
  const recommendList = [
    {
      id: "01",
      title: "Believer",
      subTitle: "Imagine Dragons",
      duration: 201.6,
      img: require("../../assets/images/s1.jpg"),
    },
    {
      id: "02",
      title: "Hall Of Fame",
      subTitle: "The Script",
      duration: 201.6,
      img: require("../../assets/images/s2.jpg"),
    },
    {
      id: "03",
      title: "It's My Life",
      subTitle: "Dr. Alban",
      duration: 201.6,
      img: require("../../assets/images/s3.jpg"),
    },
    {
      id: "04",
      title: "Not Afraid",
      subTitle: "Eminem",
      duration: 201.6,
      img: require("../../assets/images/s4.jpg"),
    },
    {
      id: "05",
      title: "I Will Survive",
      subTitle: "Gloria Gaynor",
      duration: 201.6,
      img: require("../../assets/images/s5.jpeg"),
    },
  ];
  const [dataTopSongs, setDataTopSongs] = useState([]);
  useEffect(() => {
    request
      .get("songs/getTopSong")
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  },[]);

  const popularSongList = [
    {
      id: "01",
      title: "Hall Of Fame",
      subTitle: "The Script",
      duration: 201.6,
      img: require("../../assets/images/s2.jpg"),
    },
    {
      id: "02",
      title: "Believer",
      subTitle: "Imagine Dragons",
      duration: 201.6,
      img: require("../../assets/images/s1.jpg"),
    },
    {
      id: "03",
      title: "Not Afraid",
      subTitle: "Eminem",
      duration: 201.6,
      img: require("../../assets/images/s4.jpg"),
    },
    {
      id: "04",
      title: "It's My Life",
      subTitle: "Dr. Alban",
      duration: 201.6,
      img: require("../../assets/images/s3.jpg"),
    },
    {
      id: "05",
      title: "Not Afraid",
      subTitle: "Eminem",
      duration: 201.6,
      img: require("../../assets/images/s4.jpg"),
    },
    {
      id: "06",
      title: "I Will Survive",
      subTitle: "Gloria Gaynor",
      duration: 201.6,
      img: require("../../assets/images/s5.jpeg"),
    },
  ];

  const topArtistsList = [
    {
      id: "01",
      name: "Taylor Swift",
      view: 2000000,
      img: require("../../assets/images/cs1.jpg"),
    },
    {
      id: "02",
      name: "Justin Bieber",
      view: 2000000,
      img: require("../../assets/images/cs2.jpg"),
    },
    {
      id: "03",
      name: "Lady Gaga",
      view: 2000000,
      img: require("../../assets/images/cs3.jpg"),
    },
    {
      id: "04",
      name: "Katy Perry",
      view: 2000000,
      img: require("../../assets/images/cs4.jpg"),
    },
    {
      id: "05",
      name: "Adele",
      view: 2000000,
      img: require("../../assets/images/cs1.jpg"),
    },
    {
      id: "06",
      name: "Sia",
      view: 2000000,
      img: require("../../assets/images/s4.jpg"),
    },
  ];

  const categoriesList = [
    {
      id: "01",
      name: "A - PROP",
      img: require("../../assets/images/c1.jpg"),
    },
    {
      id: "02",
      name: "B - PROP",
      img: require("../../assets/images/c2.jpg"),
    },
    {
      id: "03",
      name: "C - PROP",
      img: require("../../assets/images/c3.jpg"),
    },
    {
      id: "04",
      name: "HIP - PROP",
      img: require("../../assets/images/c4.jpg"),
    },
    {
      id: "05",
      name: "HIP - HOP",
      img: require("../../assets/images/c5.jpg"),
    },
    {
      id: "06",
      name: "VIET NAM",
      img: require("../../assets/images/c1.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <HeaderHome navigation={navigation} />

      <ScrollView>
        <PopularSongs title="Recommended For You" data={recommendList} />
        <PopularSongs title="Popular song" data={popularSongList} />
        <PopularSongs title="Top artists" data={topArtistsList} />
        <PopularSongs title="Categories" data={categoriesList} />
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
