import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { request } from "../utils/Request";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function PlaylistItem({ item, data }) {
  const navigation = useNavigation();
  const { dataSignIn } = useSelector((state) => state);
  const [dataSong, setDataSong] = useState([]);

  // console.log("item : ", item);
  const handlerAddSongPlayList = () => {
    //console.log('itemPlaylistItem : ', item.idPlaylist)
    //console.log('dataPlaylistItem : ', data.idSong)
    if (data?.idSong) {
      request
        .post("/playlist/add-songs-playlist", {
          idPlaylist: item.idPlaylist,
          idSong: data.idSong,
        })
        .then((result) => {
          alert("success!!");
          console.log("resulute : ", result.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    
  };

  const handlerNavigatePlayList = ()=>{
    if (item?.idPlaylist && dataSignIn?.idUser) {
      request
        .get(
          "/songs/get-songs-playlist" +
            (item.idPlaylist && dataSignIn.idUser
              ? "?idUser=" +
                dataSignIn.idUser +
                "&&idPlaylist=" +
                item.idPlaylist
              : "?idUser=&&idPlaylist=")
        )
        .then((result) => {
          if (result?.data) {
            // dispatch(dataSongsOfCategory(result.data));
            setDataSong(result.data);
          } else {
            console.error("result.data not valid!");
          }
        })
        .catch((error) => console.error(error));
    }
  }
  // console.log("itemSongPL : ", dataSong);
  return (
    <View
      style={{
        width: "100%",
        height: 100,
        flexDirection: "row",
        borderWidth: 1,
        elevation: 15,
        borderColor: "#ccc",
        margin: 10,
      }}
    >
      <View>
        <TouchableOpacity onPress={handlerNavigatePlayList}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: `http://192.168.1.4:8000/${item.cover}` }}
        />
        </TouchableOpacity>
       
      </View>
      <View
        style={{
          width: "50%",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 20,
        }}
      >
        <Text style={{ width: 200, height: 40, fontSize: 25 }}>
          {item.name}
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: 80,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#8D689E",
          }}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 80,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#8D689E",
          }}
          onPress={handlerAddSongPlayList}
        >
          <Text>Add Song</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
