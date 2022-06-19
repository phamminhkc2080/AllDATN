import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Surface } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getDataPlaySongs, indexSong } from "../../../redux/actions/songs";
import { request } from "../../utils/Request";
import { SongContext } from "../../../contexts/SongContext";

const { width, height } = Dimensions.get("window");

const Song = ({ item, navigation, indexSong, screenName }) => {
  // const dispatch = useDispatch();
  // const { dataSongCategory, dataSongArtists, dataPlaySongs, dataSongsSearch } =
  //   useSelector((state) => state);
  const {dataSignIn} = useSelector((state) => state);
 
  const {
    trendingSongs,
    artistsSongs,
    categorySongs,
    songControl,
    searchSongs,
  } = useContext(SongContext);
  const {
    setSongs,
    setIndex,

    setNewPlayList,

    createSound,
    onPauseSound
  } = songControl;

  const [modalVisible, setModalVisible] = useState(false);

  const handlerGetData = () => {
    if (screenName === "TrendingSongs") {
      // dispatch(getDataPlaySongs(dataSongCategory));
      //onPauseSound()
      setIndex(indexSong);  
      setSongs([]);
      setSongs(trendingSongs);
      // setTimeout(()=>{
      //   createSound()
      // },1000) 

      
    } else if (screenName === "ArtistsDetail") {
      // dispatch(getDataPlaySongs(dataSongArtists));
      setSongs(artistsSongs);
    } else if (screenName === "ResultSearch") {
      // dispatch(getDataPlaySongs(dataSongsSearch));

      setSongs(searchSongs);
      // console.log('[searchSongs[indexSong]] : ', searchSongs[indexSong])
    }
    if (screenName === "CatgoriesDetails") {
      // dispatch(getDataPlaySongs(dataSongCategory));
      setSongs(categorySongs);
      // console.log('songsSong : ', songs)
    }
  };
  const playSong = () => {
    if (item) {
      handlerGetData();

      onUpdateViewSong(item);
      setNewPlayList(true);
      setIndex(indexSong);
      navigation.navigate("PlayerMusic");
    }
  };

  const onUpdateViewSong = (item) => {
    request.put("/songs/update-view-song", {
      id: item.idSong,
    });
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // useEffect(() => {
  //   console.log('screenName = ', screenName)
  //   handlerGetData();
  // }, [screenName]);

  const handlePlayMusic = () => {
    // console.log('songsSearch : ', item)
    setModalVisible(false);
    setSongs([searchSongs[indexSong]]);
    navigation.navigate("PlayerMusic");
  };

  const handleNagativeListSong = ()=>{
    console.log('indexListSong : ', item)
    setModalVisible(false)
    navigation.navigate('DataPlaylist',{item})
  }
  const handlerNavigateSignIn=()=>{
    navigation.navigate('SignIn')
  }

  return (
    <View>
      <Modal
        transparent={true}
        onRequestClose={closeModal}
        visible={modalVisible}
        animationType="fade"
      >
        <View style={{ height: "100%", backgroundColor: "rgba(0,0,0,0.4)" }}>
          <View style={styles.modal}>
            <Surface style={styles.surface}>
              <Image
                source={{ uri: `http://192.168.1.4:8000/${item.cover}` }}
                style={styles.modalImg}
              />
            </Surface>

            <View style={styles.modalData}>
              <View style={styles.playerContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subTitle}>{item.name}</Text>
                <TouchableOpacity style={styles.btn} onPress={handlePlayMusic}>
                  <Icon name="play" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.option}>
                <Icon name="heart" size={30} color="#ff5b77" />
                <Text style={styles.text}>Add To Favourite</Text>
              </View>
              <TouchableOpacity style={styles.option} onPress={dataSignIn.isSignIn ?()=>{handleNagativeListSong}  : ()=>{handlerNavigateSignIn}}>
                <Icon name="playlist-plus" size={30} color="#000" />
                <Text style={styles.text}>Add To Playlist</Text>
              </TouchableOpacity>
              <View style={styles.option}>
                <Icon name="album" size={30} color="#000" />
                <Text style={styles.text}>Create Album</Text>
              </View>
              <View style={styles.option}>
                <Icon name="download" size={30} color="#000" />
                <Text style={styles.text}>Download</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableWithoutFeedback style={styles.songContainer} onPress={playSong}>
        <View style={{ flexDirection: "row", paddingBottom: 10 }}>
          <Image
            source={{ uri: `http://192.168.1.4:8000/${item.cover}` }}
            style={styles.img}
          />
          <View style={styles.dataContainer}>
            <Text style={styles.songtitle}>{item.namesong}</Text>
            <Text style={styles.subTitle}>{item.nameartists}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name="download"
              color="gray"
              size={30}
              style={{ marginRight: 10 }}
            />
            <TouchableOpacity onPress={openModal}>
              <Icon name="dots-vertical" color="gray" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Song;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  songContainer: {
    width: width,
    height: 70,
    padding: 10,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 5,
  },
  dataContainer: {
    paddingLeft: 10,
    width: width - 160,
    justifyContent: "center",
  },
  songtitle: {
    fontSize: 18,
    color: "#000",
  },
  subTitle: {
    fontSize: 16,
    color: "gray",
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modal: {
    height: "70%",
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
  },
  modalImg: {
    height: 180,
    width: 180,
  },
  surface: {
    height: 180,
    width: 180,
    alignSelf: "center",
    position: "absolute",
    overflow: "hidden",
    top: -100,
    borderRadius: 20,
    elevation: 20,
  },
  modalData: {
    marginTop: 100,
  },
  option: {
    height: 50,
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#e5e5e5",
  },
  text: {
    marginLeft: 15,
    color: "#000",
    fontSize: 20,
  },
  playerContainer: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
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
});
