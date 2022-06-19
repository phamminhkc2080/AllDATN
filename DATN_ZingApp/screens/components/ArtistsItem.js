import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function ArtistsItem({ item, index, screenName }) {

    const navigation = useNavigation();

  function nFormatter(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  }
  const handleNavigationArtistsDetail =()=>{
    // console.log('indexItem : ',item )
    navigation.navigate('ArtistsDetail',item)
  }

  return (
    <View>
      <TouchableWithoutFeedback style={styles.songContainer} onPress={handleNavigationArtistsDetail}>
        <View style={{ flexDirection: "row", paddingBottom: 10 }}>
          <Image
            source={{ uri: `http://192.168.1.4:8000/${item?.image}` }}
            style={styles.img}
          />
          <View style={styles.dataContainer}>
            <Text style={styles.songtitle}>{item.name}</Text>
            <Text style={styles.subTitle}>
              {nFormatter(item.follows)} Follows
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 70,
    width: 70,
    borderRadius: 5,
  },
  dataContainer: {
    paddingLeft: 10,
    width: width - 160,
    justifyContent: "center",
  },
  songtitle: {
    fontSize: 18,
    color: "#000",
  },
  subTitle: {
    fontSize: 16,
    color: "gray",
    marginTop: 5,
  },
});
