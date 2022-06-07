import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Songs from "../home/songs/Songs";

export default function TrendingSongs() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgTrending}
        source={require("../../assets/images/trending.png")}
      />
      <Text style={styles.textTrending}>Trending</Text>
      <View style={styles.containerType}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.containerType}>
            <TouchableOpacity style={styles.btnType}>
              <Text style={styles.textType}>V-POP</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Songs />
      </View>
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
  containerType: { marginBottom: 10, paddingHorizontal: 10 },
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
  containerType: { padding: 10 },
});
