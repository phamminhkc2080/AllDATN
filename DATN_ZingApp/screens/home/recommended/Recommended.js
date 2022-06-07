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

const { width, height } = Dimensions.get("window");

export default function Recommended(props) {
  return (
    <View style={styles.container}>
        <View style={styles.containerTitle}>
        <Text style={styles.title}>Recommended For You</Text>
        <View style={styles.containerIconList}>
        <Icon style={styles.iconTitle} name="playlist-play"  size={30} color="black" />
        </View>
        </View>
     
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <Surface style={styles.surface}>
            <ImageBackground
              source={require("../../../assets/images/img1.jpg")}
              style={styles.img}
            >
              <Text style={styles.name}>Morning chill</Text>
            </ImageBackground>
          </Surface>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Surface style={styles.surface}>
            <ImageBackground
              source={require("../../../assets/images/img2.jpg")}
              style={styles.img}
            >
              <Text style={styles.name}>Daily Mix</Text>
            </ImageBackground>
          </Surface>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Surface style={styles.surface}>
            <ImageBackground
              source={require("../../../assets/images/img3.jpg")}
              style={styles.img}
            >
              <Text style={styles.name}>Top Trending</Text>
            </ImageBackground>
          </Surface>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Surface style={styles.surface}>
            <ImageBackground
              source={require("../../../assets/images/img4.jpg")}
              style={styles.img}
            >
              <Text style={styles.name}>Morning chill</Text>
            </ImageBackground>
          </Surface>
        </TouchableWithoutFeedback>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 180,
    marginTop: 5,

  },

  containerTitle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  iconTitle:{
    marginTop:10,
    alignItems:'center',
    width:30,
    height:30,
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
  },
  img: {
    height: 130,
    width: 130,
    borderRadius: 5,
    padding: 10,
  },
  name: {
    position: "absolute",
    top: 10,
    left: 5,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  containerIconList:{
    width:55,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    paddingRight:25
  }
});
