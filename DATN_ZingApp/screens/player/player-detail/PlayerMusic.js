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
} from "react-native";
import { Audio } from "expo-av";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const { width, height } = Dimensions.get("window");

const PlayerMusic = () => {
  // let interval;

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

  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = useState();
  const songSlider = useRef(null);
  const [duration, setDuration] = useState();
  const [position, setPosition] = useState();

  async function createSound(index, callback) {
    const { sound } = await Audio.Sound.createAsync(
      songs[index].song
      // onPlaybackStatusUpdate
    );
    setSound(sound);

    if (typeof callback == "function") {
      callback(sound);
    }
  }

  const onPauseSound = async () => {
    await sound.pauseAsync();
  };

  // const onPlaybackStatusUpdate = (status) => {
  //   setDuration(status.durationMillis);
  //   setPosition(status.positionMillis);
  // };

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const index = Math.round(value / width);
      setSongIndex(index);
    });
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  const onHandlerNext = () => {
    if (sound) {
      sound.unloadAsync();
    }

    setSongIndex(songIndex + 1);
    createSound(songIndex + 1, (newSound) => {
      newSound.playAsync();
    });

    songSlider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
    setPlaying(true);
  };
  const onHandlerBack = () => {
    if (sound) {
      sound.unloadAsync();
    }

    setSongIndex(songIndex - 1);
    createSound(songIndex - 1, (newSound) => {
      newSound.playAsync();
    });
    songSlider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
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
        createSound(songIndex, (newSound) => {
          newSound.playAsync();
        });
      }
    }

    setPlaying((oldIsClick) => !oldIsClick);
  };

  useEffect(() => {
    if (sound && isPlaying ) {
      let interval = setInterval(() => {
        sound
          .getStatusAsync()
          .then(function (result) {
            setDuration(result.durationMillis);
            console.log("duration : ", duration);
            setPosition(result.positionMillis);
            console.log("result : ", result);
          })
          .catch((error) => {
            console.error(error);
          });
      }, 500);
      return () => {
        clearInterval(interval);
        interval = 0;
      };
    }
  }, [sound, isPlaying]);

  const renderSongs = ({ item }) => {
    return (
      <Animated.View style={styles.mainImageWrapper}>
        <View style={[styles.imageWrapper, styles.elevation]}>
          <Image style={styles.musicImage} source={item.artwork} />
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maincontainer}>
        {/* image */}
        <Animated.FlatList
          ref={songSlider}
          data={songs}
          renderItem={renderSongs}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x: scrollX },
                },
              },
            ],
            { useNativeDriver: true }
          )}
        />

        {/* Song Content */}
        <View>
          <Text style={[styles.songContent, styles.songTitle]}>
            {songs[songIndex].title}
          </Text>
          <Text style={[styles.songContent, styles.songArtist]}>
            {songs[songIndex].artist}
          </Text>
        </View>

        {/* slider */}
        <View>
          <Slider
            style={styles.progressBar}
            value={0}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#fff"
            onSlidingComplete={() => {}}
          />
        </View>

        {/* music progress durations */}
        <View style={styles.progressLevelDuration}>
          <Text style={styles.progressLabelText}>00:00</Text>
          <Text style={styles.progressLabelText}>00:00</Text>
        </View>
        {/* music controls */}
        <View style={styles.musicControlsContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-add-circle-sharp" size={35} color="#FFD369" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onHandlerBack}>
            <Ionicons name="play-skip-back-outline" size={35} color="#FFD369" />
          </TouchableOpacity>

          <TouchableOpacity onPress={onPlaySound}>
            <Ionicons
              name={isPlaying ? "pause-circle" : "ios-play-circle"}
              size={75}
              color="#FFD369"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onHandlerNext}>
            <Ionicons
              name="play-skip-forward-outline"
              size={35}
              color="#FFD369"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="horizontal-rule" size={35} color="#FFD369" />
          </TouchableOpacity>
        </View>
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
    paddingVertical: 15,
    borderTopColor: "#393E46",
    borderWidth: 1,
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
    marginTop: 20,
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
    width: "60%",
    marginTop: 10,
  },
});
