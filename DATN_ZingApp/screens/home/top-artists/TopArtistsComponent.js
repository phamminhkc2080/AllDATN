import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Surface } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");

export default function TopArtistsComponent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Top Artists</Text>
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
        <TouchableWithoutFeedback>
          <View style={styles.containerItem}>
            <Surface style={styles.surface}>
              <Image
                source={require("../../../assets/images/cs1.jpg")}
                style={styles.img}
              ></Image>
            </Surface>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail" >The Kid LAROI</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.containerItem}>
            <Surface style={styles.surface}>
              <Image
                source={require("../../../assets/images/cs2.jpg")}
                style={styles.img}
              ></Image>
            </Surface>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail" >Dream Baby</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.containerItem}>
            <Surface style={styles.surface}>
              <Image
                source={require("../../../assets/images/cs3.jpg")}
                style={styles.img}
              ></Image>
            </Surface>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail" >The Chainsmokers</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.containerItem}>
            <Surface style={styles.surface}>
              <Image
                source={require("../../../assets/images/cs4.jpg")}
                style={styles.img}
              ></Image>
            </Surface>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail" >Doja Cat</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.containerItem}>
            <Surface style={styles.surface}>
              <Image
                source={require("../../../assets/images/cs5.jpg")}
                style={styles.img}
              ></Image>
            </Surface>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail" >Westlife</Text>
          </View>
        </TouchableWithoutFeedback>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 230,
    marginTop: 5,
  },

  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconTitle: {
    marginTop: 10,
    alignItems: "center",
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    margin: 10,
    marginLeft: 15,
  },
  surface: {
    elevation: 15,
    height: 130,
    width: 130,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 15,
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
    textAlign: "center",
    width: "90%",
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  artists: {
    color: "#B3B6B7",
    fontWeight: "bold",
    fontSize: 14,
  },
  containerIconList:{
    width:55,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    paddingRight:25
  }
});
