import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");

export default function Banner(props) {
  let banners = [
    {
      title: "Metal City",
      subTitle: "Dead April",
      img: require("../../../assets/images/b1.jpg"),
      duration: 201.6,
    },
    {
      title: "Return To Forever",
      subTitle: "",
      img: require("../../../assets/images/b2.jpg"),
      duration: 201.6,
    },
    {
      title: "Your Love Remains",
      subTitle: "The Rock Music",
      img: require("../../../assets/images/b4.jpg"),
      duration: 201.6,
    },
  ];

  const playSong = () => {
    props.navigation.navigate("PlayerMusic");
    // , { item: item }
  };
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Swiper height={200} activeDotColor="white" autoplay>
          <View style={styles.banner}>
            <ImageBackground
              resizeMode="stretch"
              source={require("../../../assets/images/b1.jpg")}
              style={styles.bannerImage}
            >
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  playSong();
                }}
              >
                <Icon name="play" size={18} color="#000" />
                <Text style={styles.text}>Play Now</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>

          <View style={styles.banner}>
            <ImageBackground
              resizeMode="stretch"
              source={require("../../../assets/images/b2.jpg")}
              style={styles.bannerImage}
            >
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  playSong();
                }}
              >
                <Icon name="play" size={18} color="#000" />
                <Text style={styles.text}>Play Now</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>

          <View style={styles.banner}>
            <ImageBackground
              resizeMode="stretch"
              source={require("../../../assets/images/b4.jpg")}
              style={styles.bannerImage}
            >
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  playSong();
                }}
              >
                <Icon name="play" size={18} color="#000" />
                <Text style={styles.text}>Play Now</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </Swiper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    margin: 10,
    fontSize: 24,
    marginLeft: 15,
    color: "#000",
    fontWeight: "bold",
  },
  banner: {
    height: 230,
    width: width,
  },
  bannerImage: {
    height: 180,
    width: "100%",
  },
  btn: {
    width: 100,
    height: 24,
    bottom: 10,
    right: 10,
    elevation: 5,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    marginLeft: 5,
  },
  sliderContainer: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
  sliderImage: {
    width: "90%",
    height: "100%",
    borderRadius: 15,
    alignSelf: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
