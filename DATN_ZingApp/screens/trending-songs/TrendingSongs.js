import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Song from "../home/songs/Song";
import { request } from "../utils/Request";
import { useDispatch, useSelector } from "react-redux";
import {  dataSongsOfCategory } from "../../redux/actions/songs";

export default function TrendingSongs({navigation}) {
  const dispatch = useDispatch();
  const { dataSongCategory } = useSelector((state) => state);
  const [dataCategoriesTrending, setDataCategoriesTrending] = useState([]);

  useEffect(() => {
    request
      .get("/categories/getCategorisTrending")
      .then((result) => {
        if(result?.data){
          setDataCategoriesTrending(result?.data);
        }else{
          console.error('result.data not valid!')
        }
        
      })
      .catch((error) => console.error(error));
  }, []);

  const onHandlerGetDataSongs = (id) => {
    request
      .get("/songs/get-category-songs" + (id ? "?id=" + id : "?id=1"))
      .then((result) => {
        if(result?.data){
          dispatch(dataSongsOfCategory(result.data));
        }else{
          console.error('result.data not valid!')
        }
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    onHandlerGetDataSongs();
  }, []);

 
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgTrending}
        source={require("../../assets/images/trending.png")}
      />
      <Text style={styles.textTrending}>Trending</Text>
      <View style={styles.containerType}>
        {dataCategoriesTrending.map((item) => (
          <View style={styles.containerType} key={item.idCategoris}>
            <TouchableOpacity
              style={styles.btnType}
              onPress={() => onHandlerGetDataSongs(item.idCategoris)}
            >
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.textType}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
        <View style={styles.containerType}>
          <TouchableOpacity style={styles.btnType}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.textType}
            >
              Show All
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={dataSongCategory}
        renderItem={({ item,index }) => {
          return (
            <View style={{ paddingHorizontal: 10 }}>
              <Song item={item} navigation={navigation} index = {index} screenName = 'TrendingSongs'/>
            </View>
          );
        }}
        keyExtractor={(item) => item.idSong}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgTrending: {
    width: "100%",
    height: 200,
  },
  textTrending: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#F29E4E",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  containerType: {
    marginBottom: 10,
    paddingHorizontal: 10,
    padding: 10,
    flexDirection: "row",
  },
  btnType: {
    width: 100,
    height: 30,
    borderColor: "#F29E4E",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B2651B",
  },
  textType: { fontWeight: "bold" },
});
