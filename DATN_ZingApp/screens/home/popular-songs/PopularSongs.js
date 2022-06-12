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
import { useDispatch } from "react-redux";
import { dataplaysongs } from "../../../redux/actions/songs";

const KEY_TYPE = {
  TOP_SONGS: "topSongs",
  TOP_ARTISTS: "topArtists",
  TOP_CATEGORIES: "topCategories",
};

const { width, height } = Dimensions.get("window");

export default function PopularSongs(props) {
  const dispatch = useDispatch();
  const mapKey = (item) => {
    if (item.idSong) {
      return KEY_TYPE.TOP_SONGS;
    }

    if (item.idArtist) {
      return KEY_TYPE.TOP_ARTISTS;
    }

    if (item.idCategories) {
      return KEY_TYPE.TOP_CATEGORIES;
    }
  };

  const handleSongAndNavigate = (screenName, items) => {
    if(screenName==="PlayerMusic"){
        dispatch(dataplaysongs(items));
        // console.log('songs : ',songs);
    }
    // dispatchEvent(songs)
    props.navigation.navigate(screenName,{items});
  };

  const onHandlerPlaySong = (item) => {
    const keyType = mapKey(item);

    switch (keyType) {
      case KEY_TYPE.TOP_SONGS:
        handleSongAndNavigate("PlayerMusic", [item]);
        break;

      case KEY_TYPE.TOP_ARTISTS:
        handleSongAndNavigate("ArtistsDetail",[item]);
        break;

      case KEY_TYPE.TOP_CATEGORIES:
        handleSongAndNavigate("CategoriesDetails", [item]);
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
        {props.data.map((item) => (
          <TouchableWithoutFeedback
            key={item.idSong || item.idArtist || item.idCategoris}
            onPress={() => onHandlerPlaySong(item)}
          >
            <View style={styles.containerItem}>
              <Surface style={styles.surface}>
                <ImageBackground
                  source={{
                    uri: `http://192.168.1.4:8000/${item.cover || item.image}`,
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
