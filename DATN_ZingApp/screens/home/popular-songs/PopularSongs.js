import React from "react";
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
import { useDispatch,useSelector } from "react-redux";
import { getDataPlaySongs, indexSong } from "../../../redux/actions/songs";

const KEY_TYPE = {
  TOP_SONGS: "topSongs",
  TOP_ARTISTS: "topArtists",
  TOP_CATEGORIES: "topCategories",
};

const { width, height } = Dimensions.get("window");

export default function PopularSongs(props) {

  const dispatch = useDispatch();
  const {storeIndexSong} = useSelector(state=>state)
  const mapKey = (item) => {
    if (item.idSong) {
      return KEY_TYPE.TOP_SONGS;
    }

    if (item.idArtist) {
      return KEY_TYPE.TOP_ARTISTS;
    }

    if (item.idCategoris) {
      return KEY_TYPE.TOP_CATEGORIES;
    }
  };

  const handleSongAndNavigate = (screenName, items) => {
    if (screenName === "PlayerMusic") {
      dispatch(getDataPlaySongs(items));
      // console.log('songs : ',songs);
    }
    props.navigation.navigate(screenName,items);
  };
  const handlerIndexSong = (index) => {
    //  console.log('indexPo : ', index)
    dispatch(indexSong(index));
  };

  const onHandlerPlaySong = (item, index) => {
    const keyType = mapKey(item);

    switch (keyType) {
      case KEY_TYPE.TOP_SONGS:
        {
          handleSongAndNavigate("PlayerMusic", [item]);
          handlerIndexSong(index);
        }

        break;

      case KEY_TYPE.TOP_ARTISTS:
        handleSongAndNavigate("ArtistsDetail", item);
        break;

      case KEY_TYPE.TOP_CATEGORIES:
        handleSongAndNavigate("CategoriesDetails", item);

        break;

      default:
        return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.containerIconList}>
          <Icon
            style={styles.iconTitle}
            name="playlist-play"
            size={30}
            color="black"
          />
        </View>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.data.map((item, index) => (
          <TouchableWithoutFeedback
            key={item.idSong || item.idArtist || item.idCategoris}
            onPress={() => onHandlerPlaySong(item, index)}
          >
            <View style={styles.containerItem}>
              <Surface style={styles.surface}>
                <ImageBackground
                  source={{
                    uri: `http://192.168.0.105:8000/${item.cover || item.image}`,
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
