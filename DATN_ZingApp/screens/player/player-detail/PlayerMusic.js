import React, { useState, useEffect, useRef, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
  Animated,
} from "react-native";
import { Audio } from "expo-av";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  setDurationSound,
  isPlayingSound,
  setPositionSound,
  setRepeat,
  setShowHide,
  setSliding,
  soundaction,
} from "../../../redux/actions/playsound";
import { indexSong } from "../../../redux/actions/songs";
import usePlaySound from "../../../hooks/usePlaySound";
import { SongContext } from "../../../contexts/SongContext";

const { width, height } = Dimensions.get("window");

const PlayerMusic = (props) => {
  const [sound, setSound] = useState();

  const dispatch = useDispatch();
  // const {
  //   songs,
  //   index,
  //   statusShowHide,
  //   storesound,
  //   statusSliding,
  //   isRepeat,
  //   duration,
  //   position,
  //   isPlaying,
  // } = useSelector((state) => state);

  // const [
  //   gotoPosition,
  //   onHandlerNext,
  //   onHandlerBack,
  //   onPlaySound,
  //   onHandlerRepeat,
  // ] = usePlaySound(sound, setSound);

  const { song, songs, songControl } = useContext(SongContext);
  const {
    index,
    isRepeat,
    isPlaying,
    isSliding,
    position,
    duration,

    setPlaying,
    setSliding,
    setPosition,
    setDuration,

    setSong,
    setSongs,
    setIndex,
    setShow,
    setRepeat,

    onHandlerBack,
    onHandlerNext,
    onHandlerRepeat,
    onPauseSound,
    onPlaySound,
    gotoPosition
  } = songControl;

  // const scrollX = useRef(new Animated.Value(0)).current;

  // const [songIndex, setSongIndex] = useState(indexSong || 0);
  // const [isPlaying, setPlaying] = useState(false);
  // const [duration, setDuration] = useState(0);
  // const [position, setPosition] = useState(0);
  // const [isSliding, setSliding] = useState(false);
  // const [isRepeat, setRepeat] = useState(true);

  function convertSeconds(seconds) {
    var convert = function (x) {
      return x < 10 ? "0" + x : x;
    };
    return convert(parseInt((seconds / 60) % 60)) + ":" + convert(seconds % 60);
  }

  const formatNumber = (number) => {
    return convertSeconds((number / 1000).toFixed(0));
  };

  const displayDuration = (number) => {
    return isNaN(number) ? "--:--" : formatNumber(number);
  };

  const onBackNavigation = () => {
    setShow(true)
    //dispatch(setShowHide(true));
    // dispatch(setPositionSound(position));
    // dispatch(setDurationSound(duration));
    props.navigation.goBack();
  };

  // console.log("dataPlaySongsMusic : ", songs);
  // console.log("storeIndexSongMusic  : ", index);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maincontainer}>
        <View style={styles.iconBack}>
          <Icon
            name="arrow-left"
            size={30}
            color="white"
            onPress={onBackNavigation}
          />
        </View>

        <Animated.View style={styles.mainImageWrapper}>
          <View style={[styles.imageWrapper, styles.elevation]}>
            {songs[index] ? (
              <Image
                style={styles.musicImage}
                source={{
                  uri: `http://192.168.1.4:8000/${songs[index]?.cover}`,
                }}
              />
            ) : (
              <Text>Hello</Text>
            )}
          </View>
        </Animated.View>
        
        {/* Song Content */}
        <View>
          <Text style={[styles.songContent, styles.songTitle]}>
            {songs[index]?.namesong}
          </Text>
          <Text style={[styles.songContent, styles.songArtist]}>
            {songs[index]?.nameartists}
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.bottomIconWrapper}>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="heart-outline" size={30} color="#888888" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="repeat" size={30} color="#888888" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="share-outline" size={30} color="#888888" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="ellipsis-horizontal" size={30} color="#888888" />
            </TouchableOpacity>
          </View>
        </View>

        {/* slider */}
        <View>
          <Slider
            style={styles.progressBar}
            value={position}
            minimumValue={0}
            maximumValue={duration}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#fff"
            onSlidingComplete={gotoPosition}
            onSlidingStart={() => setSliding(true)}
          />
        </View>

        {/* music progress durations */}
        <View style={styles.progressLevelDuration}>
          <Text style={styles.progressLabelText}>
            {formatNumber(position)}
          </Text>
          <Text style={styles.progressLabelText}>
            {displayDuration(duration)}
          </Text>
        </View>
        {/* music controls */}
        <View style={styles.musicControlsContainer}>
          <TouchableOpacity>
            <Ionicons name="shuffle-outline" size={35} color="#FFD369" />
          </TouchableOpacity>

          {index <= 0 ? (
            <Ionicons name="play-skip-back-outline" size={35} color="#eee" />
          ) : (
            <TouchableOpacity onPress={onHandlerBack}>
              <Ionicons
                name="play-skip-back-outline"
                size={35}
                color="#FFD369"
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={onPlaySound}>
            <Ionicons
              name={isPlaying ? "pause-circle" : "ios-play-circle"}
              size={75}
              color="#FFD369"
            />
          </TouchableOpacity>
          {index >= songs.length - 1 ? (
            <Ionicons name="play-skip-forward-outline" size={35} color="#eee" />
          ) : (
            <TouchableOpacity onPress={onHandlerNext}>
              <Ionicons
                name="play-skip-forward-outline"
                size={35}
                color="#FFD369"
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={onHandlerRepeat}>
            <MaterialIcons
              name={isRepeat ? "repeat-one" : "repeat"}
              size={30}
              color="#FFD369"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlayerMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  maincontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    width: width,
    alignItems: "center",
    marginTop: 40,
  },
  bottomIconWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  // iconBack: {
  //     marginRight:360,
  //     marginBottom:40
  // },
  mainImageWrapper: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 150,
  },
  imageWrapper: {
    width: 300,
    height: 340,
    marginBottom: 20,
    marginTop: 20,
  },
  musicImage: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  elevation: {
    elevation: 5,
    shadowColor: "#ccc",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  songContent: {
    textAlign: "center",
    color: "#EEEEEE",
  },
  songTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#EEEEEE",
  },
  songArtist: {
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    color: "#EEEEEE",
  },
  progressBar: {
    width: 350,
    height: 40,
    flexDirection: "row",
  },
  progressBarVolume: {
    width: 120,
    height: 40,
    flexDirection: "row",
  },
  progressLevelDuration: {
    width: 340,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  progressLabelText: {
    color: "#fff",
    fontWeight: "500",
  },
  musicControlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "65%",
    marginTop: 10,
  },
});
