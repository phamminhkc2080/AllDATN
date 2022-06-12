import React, { useState, useEffect, useRef } from "react";
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
  Alert,
} from "react-native";
import { Audio } from "expo-av";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useDispatch, useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

const PlayerMusic = (props) => {
  const dispatch = useDispatch();
  const { dataPlaySongs } = useSelector((state) => state);

  const songs = [
    {
      id: 1,
      title: "19th Floor",
      artist: "Bobby Richards",
      artwork: require("../../../assets/images/img1.jpg"),
      url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2F19th%20Floor%20-%20Bobby%20Richards.mp3?alt=media&token=4fe09d01-c064-440e-9fa7-e02005ebd79f",
      song: require("../../../assets/audio/BIGBANG-(SOBER)MV.mp3"),
    },
    {
      id: 2,
      title: "Awful",
      artist: "josh pan",
      artwork: require("../../../assets/images/img2.jpg"),
      url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FAwful%20-%20josh%20pan.mp3?alt=media&token=5b174d4c-be09-417c-9fb8-b384f3ce0ec2",
      song: require("../../../assets/audio/BIGBANG-BADBOYMV.mp3"),
    },
    {
      id: 3,
      title: "Something is Going On",
      artist: "Godmode",
      artwork: require("../../../assets/images/img3.jpg"),
      url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FSomething%20is%20Going%20On%20-%20Godmode.mp3?alt=media&token=ecf0d5c5-bc93-48c3-9046-077638d12cfd",
      song: require("../../../assets/audio/BIGBANG-TONIGHTMV.mp3"),
    },
    {
      id: 4,
      title: "Book The Rental Wit It",
      artist: "RAGE",
      artwork: require("../../../assets/images/img4.jpg"),
      url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FBook%20The%20Rental%20Wit%20It%20-%20RAGE.mp3?alt=media&token=6f76a691-fd9c-4057-ac0a-0e39104e865e",
      song: require("../../../assets/audio/BIGBANG-LOVESONGMV.mp3"),
    },
    {
      id: 5,
      title: "Crimson Fly",
      artist: "Huma-Huma",
      artwork: require("../../../assets/images/img5.jpg"),
      url: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FCrimson%20Fly%20-%20Huma-Huma.mp3?alt=media&token=b2d30b27-286e-4d7d-82ad-1bdfa76a4058",
      song: require("../../../assets/audio/tacudicungnhau.mp3"),
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

  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = useState();
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [isSliding, setSliding] = useState(false);
  const [isRepeat, setRepeat] = useState(true);

  async function createSound(data, index, callback) {
    const { sound } = await Audio.Sound.createAsync({uri:`http://192.168.1.4:8000/${data[index].dir}`});
    setSound(sound);

    if (typeof callback == "function") {
      callback(sound);
    }
  }

  const onPauseSound = async () => {
    await sound.pauseAsync();
  };

  useEffect(() => {
    createSound(dataPlaySongs, songIndex, (newSound) => {
      newSound
        .getStatusAsync()
        .then((result) => setDuration(result.durationMillis));
    });
  }, [dataPlaySongs]);

  // useEffect(() => {
  //   // handle songs from useSelector/redux store
  // }, [dataPlaySongs]);

  const onHandlerNext = () => {
    if (songIndex >= dataPlaySongs.length - 1) {
      return;
    }
    if (sound) {
      sound.unloadAsync();
    }

    setSongIndex(songIndex + 1);
    createSound(dataPlaySongs, songIndex + 1, (newSound) => {
      newSound.playAsync();
    });

    setPlaying(true);
  };

  const onHandlerBack = () => {
    if (songIndex <= 0) {
      return;
    }
    if (sound) {
      sound.unloadAsync();
    }

    setSongIndex(songIndex - 1);
    createSound(dataPlaySongs, songIndex - 1, (newSound) => {
      newSound.playAsync();
    });

    setPlaying(true);
  };

  const onPlaySound = async () => {
    if (isPlaying) {
      onPauseSound();
    } else {
      if (sound) {
        await sound.playAsync();
      } else {
        createSound(dataPlaySongs, songIndex, (newSound) => {
          newSound.playAsync();
        });
      }
    }

    setPlaying((oldIsClick) => !oldIsClick);
  };

  useEffect(() => {
    if (sound && isPlaying && !isSliding) {
      let interval = setInterval(() => {
        sound.setOnPlaybackStatusUpdate((result) => {
          setDuration(result.durationMillis);
          setPosition(result.positionMillis);
          if (result.didJustFinish) {

            if (result.isLooping) {
              return;
            }

            if(songIndex < dataPlaySongs.length-1){
              setPlaying(false);
              setSongIndex(songIndex + 1);
              setPosition(0);
              createSound(dataPlaySongs, songIndex + 1, (newSound) => {
                newSound.playAsync();
              });
              setPlaying(true);
            }else{
              setPosition(0);
              setPlaying(false);
            }
           
          }
        });
      }, 500);
      return () => {
        clearInterval(interval);
        interval = 0;
      };
    }
  }, [sound, isPlaying, isSliding]);

  const gotoPosition = (pos) => {
    const checkPlaying = isPlaying;

    if (isPlaying) {
      setPlaying(false);
    }

    setPosition(pos);

    if (checkPlaying) {
      sound.playFromPositionAsync(pos);
      setPlaying(true);
    } else {
      sound.setPositionAsync(pos);
    }
    setSliding(false);
  };

  // converNumber
  function convertSeconds(seconds) {
    var convert = function (x) {
      return x < 10 ? "0" + x : x;
    };
    return convert(parseInt((seconds / 60) % 60)) + ":" + convert(seconds % 60);
  }

  const onHandlerRepeat = () => {
    setRepeat((repeat) => !repeat);
    sound.setIsLoopingAsync(isRepeat);
  };
  // console.log('sount : ', dataPlaySongs[songIndex]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maincontainer}>
        <Animated.View style={styles.mainImageWrapper}>
          <View style={[styles.imageWrapper, styles.elevation]}>
            <Image
              style={styles.musicImage}
              source={{uri:`http://192.168.1.4:8000/${dataPlaySongs[songIndex].cover}`}}
            />
          </View>
        </Animated.View>
        {/* Song Content */}
        <View>
          <Text style={[styles.songContent, styles.songTitle]}>
            {dataPlaySongs[songIndex].namesong}
          </Text>
          <Text style={[styles.songContent, styles.songArtist]}>
            {dataPlaySongs[songIndex].nameartists}
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
            {convertSeconds((position / 1000).toFixed(0))}
          </Text>
          <Text style={styles.progressLabelText}>
            {convertSeconds((duration / 1000).toFixed(0))}
          </Text>
        </View>
        {/* music controls */}
        <View style={styles.musicControlsContainer}>
          <TouchableOpacity>
            <Ionicons name="shuffle-outline" size={35} color="#FFD369" />
          </TouchableOpacity>

          {songIndex <= 0 ? (
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
          {songIndex >= dataPlaySongs.length - 1 ? (
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
              name={isRepeat ? "repeat" : "repeat-one"}
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
