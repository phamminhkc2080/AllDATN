import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Surface } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Songs from "../../home/songs/Songs";

const { width, height } = Dimensions.get("screen");

export default function ProfileDetail() {
  const renderOption = (icon, name, count) => {
    return (
      <View style={styles.options}>
        <View style={styles.left}>
          <Icon name={icon} size={30} color="#000" />
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.left}>
          <Text style={styles.title}>{20}</Text>
          <Ionicons
            name="ios-arrow-forward"
            size={30}
            color="gray"
            style={{ marginLeft: 20 }}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Surface style={styles.surface}>
          <Image
            style={styles.profile}
            source={require("../../../assets/images/icon_black.png")}
          />
        </Surface>
        <View style={styles.dataContainer}>
          <Text style={styles.name}>Pham Minh</Text>
          <Text style={styles.unname}>Minh Minh</Text>
          <Text style={styles.unname}>10 Jan 2000 </Text>
        </View>
      </View>
      <View style={styles.divider} />
      {renderOption("music", "Songs", 20)}
      {renderOption("playlist-music", "Playlist", 25)}
      {renderOption("download", "Downloads", 10)}
      <View style={styles.divider} />
      <View style={styles.containerItems}>
        <Text style={styles.titleHistory}>History</Text>
        <Songs />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  info: {
    padding: 10,
    flexDirection: "row",
  },
  surface: {
    height: 80,
    width: 80,
    borderRadius: 75,
    elevation: 15,
    overflow: "hidden",
  },
  profile: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  dataContainer: {
    paddingLeft: 10,
  },
  name: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  unname: {
    fontSize: 18,
    color: "gray",
  },
  divider: {
    height: 10,
    backgroundColor: "#e5e5e5",
  },
  options: {
    height: 55,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  left: {
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    marginLeft: 15,
  },
  containerItems: {
    width: width,
  },
  titleHistory: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    margin: 10,
    marginLeft: 15,
  },
});
