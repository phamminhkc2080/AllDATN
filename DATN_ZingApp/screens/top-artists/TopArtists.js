import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { request } from "../utils/Request";

export default function TopArtists(props) {
  const [dataAllArtists, setDataAllArtists] = useState([]);
  const gotoArtitsDetail = (items) => {
    props.navigation.navigate("ArtistsDetail",items);
  };

  useEffect(() => {
    request
      .get("/artists/get-all-artists")
      .then((result) => {
        setDataAllArtists(result.data);
      })
      .catch((error) => console.error(error));
  }, []);
  
  function nFormatter(num) {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}

  return (
    <SafeAreaView style={styles.constainer}>
      {/* <View style={styles.searchSection}>
      </View> */}
      <Image style ={{width:'100%',height:100,}} source={require('../../assets/images/ArtistsBanner.png')}/>

      <FlatList
        data={dataAllArtists}
        keyExtractor={(item) => item.idArtist}
        renderItem={(item) => {
          return (
            
            <View style={styles.containerComponent}>
              <TouchableOpacity
                style={styles.containerArtits}
                onPress={()=>gotoArtitsDetail(item.item)
                
                }
              >
                <View>
                  <Image
                    style={styles.imgArtists}
                    source={{
                      uri: `http://192.168.1.4:8000/${item.item.image}`,
                    }}
                  />
                </View>
                <View style={styles.containerText}>
                  <Text
                    style={styles.textName}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.item.name}
                  </Text>
                  <Text style={styles.textFollow}>{nFormatter(item.item.follows)} Follows</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.containerFollow}>
                <TouchableOpacity style={styles.buttonFollow}>
                  <Text style={styles.textFollow}>Follow</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: "column",
  },
  searchSection: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e8e8e8",
    marginLeft: 3,
  },
  searchIcon: {
    width: 40,
    height: 40,
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  input: {
    width: "75%",
    color: "#000000",
  },
  containerComponent: {
    flexDirection: "row",
    padding: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  containerArtits: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around",
  },
  imgArtists: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  containerText: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  textName: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    width: 100,
  },
  textFollow: {
    fontSize: 15,
    fontWeight: "500",
  },
  containerFollow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 15,
  },
  buttonFollow: {
    width: "80%",
    height: 33,
    borderWidth: 2,
    borderColor: "#9A9B9C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  textFollow: {
    fontWeight: "700",
    fontSize: 15,
  },
});
