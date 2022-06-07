import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { Surface } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");

export default function Categories(props) {
  let categories = [
    {
      name: "Rock",
      img: require("../../../assets/images/c1.jpg"),
    },
    {
      name: "Metal",
      img: require("../../../assets/images/c2.jpg"),
    },
    {
      name: "Rock",
      img: require("../../../assets/images/c3.jpg"),
    },
    {
      name: "Jazz",
      img: require("../../../assets/images/c4.jpg"),
    },
    {
      name: "Classic",
      img: require("../../../assets/images/c5.jpg"),
    },
  ];

  const goToDetails = (item) => {
    props.navigation.navigate("CategoriesDetails", { item: item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.containerIconList}>
          <Icon
            style={styles.iconTitle}
            name="playlist-play"
            size={30}
            color="black"
          />
        </View>
      </View>

      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => goToDetails(item)}
              key={index + item.name}
            >
              <Surface style={styles.surface}>
                <ImageBackground
                  source={item.img}
                  style={styles.img}
                  blurRadius={3}
                >
                  <Icon name="music" color="#fff" size={22} />
                  <Text style={styles.name}>{item.name}</Text>
                </ImageBackground>
              </Surface>
            </TouchableWithoutFeedback>
          );
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 200,
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconTitle: {
    width: 30,
    height: 30,
    marginTop: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    margin: 10,
    marginLeft: 15,
  },
  surface: {
    height: 130,
    width: 130,
    elevation: 15,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 15,
    overflow: "hidden",
  },
  img: {
    height: 130,
    width: 130,
    borderRadius: 10,
    padding: 10,
  },
  name: {
    position: "absolute",
    bottom: 10,
    left: 15,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
  containerIconList: {
    width: 55,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 25,
  },
});
