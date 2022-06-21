import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import Song from "../home/songs/Song";
import { SongContext } from "../../contexts/SongContext";
import { request } from "../utils/Request";
export default function SongsPlaylist(props) {
  const { dataSignIn } = useSelector((state) => state);

  const { songPlayList, songControl } = useContext(SongContext);
  const { isShow, setShow, setArtistsSongs, setSongPlaylist } = songControl;

  // console.log('props : ', props)
  const idPlaylist = props.route.params.item;

  useEffect(() => {
    if (idPlaylist && dataSignIn?.idUser) {
      request
        .get(
          "/songs/get-songs-playlist" +
            (idPlaylist && dataSignIn.idUser
              ? "?idUser=" + dataSignIn.idUser + "&&idPlaylist=" + idPlaylist
              : "?idUser=&&idPlaylist=")
        )
        .then((result) => {
          if (result?.data) {
            // dispatch(dataSongsOfCategory(result.data));
            setSongPlaylist(result?.data);
          } else {
            console.error("result.data not valid!");
          }
        })
        .catch((error) => console.error(error));
    }
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.constainer}>
        <TouchableWithoutFeedback>
          <View style={styles.searchSection}>
            <Ionicons
              style={styles.searchIcon}
              name="search"
              size={20}
              color="#000"
            />
            <TextInput
              editable={false}
              placeholder="Search...."
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        data={songPlayList}
        // keyExtractor={(item) => item.idSong}
        renderItem={({ item, index }) => {
          return ( 

            <Song
              key={item.idSong+index}
              item={item}
              indexSong={index}
              navigation={props.navigation}
              screenName="SongPlayList"
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  constainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 20,
  },
  searchSection: {
    height: 40,
    width: "100%",
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#e8e8e8",
    marginLeft: "2.5%",
    marginRight: "2.5%",
  },
  searchIcon: {
    width: 40,
    height: 40,
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  input: {
    width: "70%",
    color: "#000000",
  },

  imageUser: {
    width: 32,
    height: 32,
    borderRadius: 20,
  },
});
