import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Slider from "@react-native-community/slider";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Surface } from "react-native-paper";
import Songs from "../../home/songs/Songs";

const { width, height } = Dimensions.get("screen");

export default function PlayerDetail(props) {
  const songs = [
    {
      id: 1,
      title: "19th Floor",
      artist: "Bobby Richards",
      artwork: require("../../../assets/images/img1.jpg"),
      url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2F19th%20Floor%20-%20Bobby%20Richards.mp3?alt=media&token=4fe09d01-c064-440e-9fa7-e02005ebd79f",
      song: require("../../../assets/audio/19thFloor-BobbyRichards.mp3"),
    },
    {
      id: 2,
      title: "Awful",
      artist: "josh pan",
      artwork: require("../../../assets/images/img2.jpg"),
      url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FAwful%20-%20josh%20pan.mp3?alt=media&token=5b174d4c-be09-417c-9fb8-b384f3ce0ec2",
      song: require("../../../assets/audio/Awful-joshpan.mp3"),
    },
    {
      id: 3,
      title: "Something is Going On",
      artist: "Godmode",
      artwork: require("../../../assets/images/img3.jpg"),
      url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FSomething%20is%20Going%20On%20-%20Godmode.mp3?alt=media&token=ecf0d5c5-bc93-48c3-9046-077638d12cfd",
      song: require("../../../assets/audio/SomethingisGoingOn-Godmode.mp3"),
    },
    {
      id: 4,
      title: "Book The Rental Wit It",
      artist: "RAGE",
      artwork: require("../../../assets/images/img4.jpg"),
      url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FBook%20The%20Rental%20Wit%20It%20-%20RAGE.mp3?alt=media&token=6f76a691-fd9c-4057-ac0a-0e39104e865e",
      song: require("../../../assets/audio/BookTheRentalWitIt-RAGE.mp3"),
    },
    {
      id: 5,
      title: "Crimson Fly",
      artist: "Huma-Huma",
      artwork: require("../../../assets/images/img5.jpg"),
      url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FCrimson%20Fly%20-%20Huma-Huma.mp3?alt=media&token=b2d30b27-286e-4d7d-82ad-1bdfa76a4058",
      song: require("../../../assets/audio/CrimsonFly-Huma-Huma.mp3"),
    },
    {
      id: 6,
      title: "Chúng ta không là của nhau",
      artist: "Sơn Tòng",
      artwork: require("../../../assets/images/sontungmtp.webp"),
      url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FCrimson%20Fly%20-%20Huma-Huma.mp3?alt=media&token=b2d30b27-286e-4d7d-82ad-1bdfa76a4058",
      song: require("../../../assets/audio/ChungTaKhongThuocVeNhau-SonTungMTP-4528181.mp3"),
    },
  ];
  const [value, setValue] = useState(0.0);
  const [maxValue, setMaxValue] = useState(0,0);
  setMaxValue(props.item.duration / 60);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ height: height + 60 }}>
          <Surface style={styles.surface}>
            <Image source={props.item.img} style={styles.img} />
          </Surface>
          <View style={styles.dataContainer}>
            <Text style={styles.title}>{props.item.title}</Text>
            <Text style={styles.subTitle}>{props.item.subTitle}</Text>
            <TouchableOpacity style={styles.btn}>
              <Icon name="play" size={30} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={styles.text}>Queue</Text>
          <Songs navigation={props.navigation} />
        </View>
      </ScrollView>
      <View style={styles.main}>
        <Slider
          value={value}
          minimumValue={0.0}
          maximumValue={maxValue}
          onValueChange={(value) => setValue(value)}
          thumbStyle={{ backgroundColor: "#ff5b77", height: 12, width: 12 }}
          thumbTintColor="red"
          maximumTrackTintColor="#e5e5e5"
          minimumTrackTintColor="#ff5b77"
          trackStyle={{ backgroundColor: "red", height: 1 }}
        />
        <View style={styles.actions}>
          <Icon name="shuffle-variant" size={35} color="#000" />
          <Icon name="skip-backward" size={35} color="#000" />
          <Icon name="play" size={35} color="#000" />
          <Icon name="skip-forward" size={35} color="#000" />
          <Icon name="sync" size={35} color="#000" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  surface: {
    height: 200,
    width: 200,
    borderRadius: 10,
    elevation: 15,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 20,
  },
  img: {
    height: 200,
    width: 200,
  },
  dataContainer: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#ff5b77",
    elevation: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  actions: {
    width: "100%",
    height: 60,
    padding: 10,
    paddingTop: 0,
    // borderTopWidth: 0.5,
    // borderTopColor: 'gray',
    justifyContent: "space-between",
    flexDirection: "row",
  },
  main: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#333333",
    margin: 10,
  },
});
