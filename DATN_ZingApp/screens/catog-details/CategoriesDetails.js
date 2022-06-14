import React, { useEffect } from "react";
import { Surface } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Song from "../home/songs/Song";
import { useDispatch, useSelector } from "react-redux";
import { dataSongsOfCategory } from "../../redux/actions/songs";
import { request } from "../utils/Request";

export default function CategoriesDetails(props) {
  const dispatch = useDispatch();
  const { dataSongCategory } = useSelector((state) => state);

  let data = props.route.params;
  // const onHandlerGetData=(data)=>{
  //   if(data){
  //     return props.route.params;
  //   }else{
  //     return [];
  //   }
  // }

  useEffect(() => {
    request
      .get(
        "/songs/get-category-songs" +
          (data.idCategoris ? "?id=" + data.idCategoris : "?id=")
      )
      .then((result) => {
        if (result?.data) {
          dispatch(dataSongsOfCategory(result.data));
        } else {
          console.error("result.data not valid!");
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Surface style={styles.surface}>
          <Image
            source={{ uri: `http://172.20.10.2:8000/${data.cover}` }}
            style={styles.img}
          />
        </Surface>

        <Text style={styles.title}>{data.name}</Text>

        <View style={styles.playContainer}>
          <Text style={styles.text}>Play All</Text>
          <TouchableOpacity style={styles.btn}>
            <Icon name="play" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.text2}>Songs</Text>
      <FlatList
        data={dataSongCategory}
        renderItem={({ item, index }) => {
          return (
            <View style={{ paddingHorizontal: 10 }}>
              <Song item={item} navigation={navigation} index={index} screenName = 'CatgoriesDetails'/>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  surface: {
    width: 220,
    height: 220,
    elevation: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  img: {
    width: 220,
    height: 220,
  },

  title: {
    fontSize: 32,
    marginTop: 10,
    color: "#000",
    fontWeight: "bold",
  },
  playContainer: {
    height: 50,
    width: "100%",
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "#000",
    marginRight: 20,
  },
  btn: {
    width: 50,
    height: 50,
    elevation: 10,
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: "#ff5b77",
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    margin: 10,
    fontSize: 18,
    color: "#333333",
    fontWeight: "bold",
  },
});
