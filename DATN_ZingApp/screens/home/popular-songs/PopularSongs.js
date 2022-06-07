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

export default function PopularSongs(props) {
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
          <TouchableWithoutFeedback key={item.id}>
            <View style={styles.containerItem}>
              <Surface style={styles.surface}>
                <ImageBackground
                  source={item.img}
                  style={styles.img}
                ></ImageBackground>
              </Surface>

              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
                {item.name || item.title}
              </Text>

              <Text style={styles.artists}>{item.subTitle}</Text>
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
