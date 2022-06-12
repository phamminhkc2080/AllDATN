import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");

export default function ArtistsDetail(props) {
  console.log(props.route.params.items);
  // const[dataArtist,setDataArtist]=useState([]);

  let dataAritsts = props.route.params.items;
  return (
    <View style={styles.container}>
      <View>
        <Image
          resizeMode="cover"
          style={styles.imgArtists}
          source={{uri:`http://192.168.1.4:8000/${dataAritsts[0].image}`}}
        />
        <LinearGradient
        colors={['rgba(0,0,0,0.1)','black']}
        l
          style={{
            width: width,
            height: 360,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            position:'absolute'
          }}
        ></LinearGradient>

        <Icon
          style={styles.iconBack}
          name="arrow-left"
          size={30}
          color="black"
        />

        <View style={styles.containerArtists}>
          <View>
            <Text style={styles.name}>{dataAritsts[0].name}</Text>
          </View>

          <View>
            <Text style={styles.textFollow}>{dataAritsts[0].follows} Follow</Text>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.btnFollow}>
              <Text style={styles.textFollow}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPlayAll}>
              <Text style={styles.textPlayAll}>Play All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.containerTitle}>
        <Text style={styles.title}>Songs</Text>
        <View style={styles.containerIconList}>
          <Icon
            style={styles.iconTitle}
            name="playlist-play"
            size={30}
            color="black"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconBack: {
    position: "absolute",
  },
  imgArtists: {
    width: width,
    height: 360,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  containerTitle: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    margin: 10,
    fontSize: 20,
    color: "#000",
    marginLeft: 15,
    fontWeight: "bold",
  },
  containerIconList: {
    width: 55,
    height: 50,
    paddingRight: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  iconTitle: {
    width: 30,
    height: 30,
    marginTop: 10,
    alignItems: "center",
  },
  containerArtists: {
    top: 200,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
  },
  name: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
  },
  textFollow: {
    fontSize: 20,
    color: "white",
    shadowColor: "black",
  },
  containerButton: {
    padding: 10,
    width: width,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnFollow: {
    width: 210,
    height: 40,
    borderWidth: 2,
    borderRadius: 50,
    alignItems: "center",
    borderColor: "white",
    justifyContent: "center",
  },
  btnPlayAll: {
    width: 210,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    borderColor: "#721799",
    justifyContent: "center",
    backgroundColor: "#721799",
  },
  textFollow: {
    fontSize: 21,
    color: "white",
  },
  textPlayAll: {
    fontSize: 21,
    color: "white",
  },
});
