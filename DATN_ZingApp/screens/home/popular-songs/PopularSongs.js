import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Surface } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  TITLE_ALBUMS,
  TITLE_CATEGORIES,
  TITLE_POPULAR_SONGS,
  TITLE_RECOMMENDED_SONGS,
  TITLE_TOP_ARTISTS,
} from "../../../constansts/common";
import { SongContext } from "../../../contexts/SongContext";
import { getDataPlaySongs, indexSong } from "../../../redux/actions/songs";
import { request } from "../../utils/Request";

const KEY_TYPE = {
  TOP_SONGS: "topSongs",
  TOP_ARTISTS: "topArtists",
  TOP_CATEGORIES: "topCategories",
  ALBUM_SONGS: "albumSongs",
};

const { width, height } = Dimensions.get("window");

export default function PopularSongs(props) {
  const dispatch = useDispatch();
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
    gotoPosition,
  } = songControl;

  //const { storeIndexSong, dataPlaySongs } = useSelector((state) => state);

  const handlerGetKey = (item) => {
    if (props.title === "Recommended For You") {
      return item.idSong;
    } else if (props.title === "Popular song") {
      return item.idSong;
    } else if (props.title === "Top artists") {
      return item.idArtist;
    } else if (props.title === "Categories") {
      return item.idCategoris;
    } else if (props.title === "Album") {
      return item.idAlbum;
    }
  };

  const handleSongAndNavigate = (screenName, items) => {
    props.navigation.navigate(screenName, items);
  };

  const handlerIndexSong = (index) => {
    //dispatch(indexSong(index));
    songControl.setIndex(index);
  };

  const onHandlerPlaySong = (items, index) => {
    switch (props.title) {
      case TITLE_POPULAR_SONGS:
        if (items[index].idSong) {
          onUpdateViewSong(items[index].idSong);

          // console.log("idArtits : ", items[index].idSong);

          //dispatch(getDataPlaySongs(items));
          songControl.setSongs(items);
          handlerIndexSong(index);
          songControl.setPlaying(true);
          props.navigation.navigate("PlayerMusic");
        }
        break;
      case TITLE_RECOMMENDED_SONGS:
        if (items[index].idSong) {
          onUpdateViewSong(items[index].idSong);

          console.log("idArtits : ", items[index].idSong);

          songControl.setSongs(items);
          // dispatch(getDataPlaySongs(items));
          handlerIndexSong(index);

          props.navigation.navigate("PlayerMusic");
        }

        break;

      case TITLE_TOP_ARTISTS:
        handleSongAndNavigate("ArtistsDetail", items[index]);
        break;

      case TITLE_CATEGORIES:
        handleSongAndNavigate("CategoriesDetails", items[index]);

        break;
      case TITLE_ALBUMS:
        handleSongAndNavigate("CategoriesDetails", items[index]);
        break;

      default:
        return;
    }
  };
  const onUpdateViewSong = (item) => {
    request.put("/songs/update-view-song", {
      id: item,
    });
  };

  // useEffect(()=>{
  //   onUpdateViewSong()

  // },[props.data[storeIndexSong].idArtist])
  console.log();
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{props.title}</Text>
        {/* <View style={styles.containerIconList}>
          <Icon
            style={styles.iconTitle}
            name="playlist-play"
            size={30}
            color="black"
          />
        </View> */}
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.data.map((item, index) => (
          <TouchableWithoutFeedback
            key={handlerGetKey(item)}
            onPress={() => onHandlerPlaySong(props.data, index)}
            // onPress={() => onHandlerPlaySong(item, index)}
          >
            <View style={styles.containerItem}>
              <Surface style={styles.surface}>
                <ImageBackground
                  source={{
                    uri: `https://application-mock-server.loca.lt/${item.cover || item.image}`,
                  }}
                  style={styles.img}
                ></ImageBackground>
              </Surface>

              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
                {item.namesong || item.nameartists || item.name}
              </Text>

              <Text style={styles.artists}>{item.nameartists}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 230,
    paddingHorizontal: 15,
  },

  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerItem: {
    justifyContent: "center",
    marginRight: 25,
  },
  iconTitle: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  surface: {
    elevation: 15,
    height: 130,
    width: 130,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "column",
  },
  img: {
    height: 130,
    width: 130,
    borderRadius: 5,
    padding: 10,
  },
  name: {
    width: 130,
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 5,
  },
  artists: {
    color: "#B3B6B7",
    fontWeight: "bold",
    fontSize: 14,
  },
  containerIconList: {
    width: 55,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
