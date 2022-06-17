import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { SongContext } from "../../contexts/SongContext";

export default function MiniPlayMusic() {
  const navigation = useNavigation();

  const { song, songs, songControl } = useContext(SongContext);
  const {
    index,
    isShow,
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


  // const { songs, index, isPlaying, isShow } =
  //   useSelector((state) => state);

  // const [
  //   gotoPosition,
  //   onHandlerNext,
  //   onHandlerBack,
  //   onPlaySound,
  //   onHandlerRepeat,
  // ] = usePlaySound(sound, setSound);

  useEffect(()=>{
    if(!isShow && song){
      
      onPlaySound()
    }

  },[isShow])
  
  const onNavigate =()=>{
      navigation.navigate('PlayerMusic');
  }

  return (
    <View style={[styles.container, !isShow && styles.hideContainer]}>
      <TouchableWithoutFeedback  onPress={onNavigate}>
        <View style={styles.containerImageTitle}>

        <View>
          <Image
            style={styles.image}
            source={require("../../assets/images/cs3.jpg")}
          />
        </View>
        <View style={styles.containerText}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.nameSong}>
            {songs && songs[index]?.namesong}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {songs &&songs[index]?.nameartists}
          </Text>
        </View>
        </View>

      </TouchableWithoutFeedback>
      <View style={styles.containerButton}>
        <Ionicons
          name="play-skip-back-outline"
          size={25}
          color="black"
          onPress={onHandlerBack}
        />
        <Ionicons
          name={isPlaying ? "pause-circle" : "ios-play-circle"}
          size={35}
          color="black"
          onPress={onPlaySound}
        />
        <Ionicons
          name="play-skip-forward-outline"
          size={25}
          color="black"
          onPress={onHandlerNext}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 60,
    backgroundColor: "#ddd",
    position: "absolute",
    bottom: 60,
    borderTopColor: "#bbb",
    borderBottomColor: "#bbb",
    flexDirection: "row",
  },
  hideContainer: {
    display: "none",
  },
  containerImageTitle: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor:'red'
  },

  containerButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "center",
    borderRadius: 70,
  },
  containerText: { width: 250 },
  nameSong: { fontSize: 15, fontWeight: "bold" },
});
