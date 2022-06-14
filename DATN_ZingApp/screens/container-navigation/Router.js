import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import StackNavigation from "./StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector} from "react-redux/es/exports";

export default function Router() {
  const {statusShowHide} = useSelector(state => state);
  console.log('statusShow : ', statusShowHide)
  return (
    <NavigationContainer>
      <StackNavigation />
      {statusShowHide?<View style={styles.container}>
        <View style={styles.containerImageTitle}>
          <View>
            <Image
              style={styles.image}
              source={require("../../assets/images/cs3.jpg")}
            />
          </View>
          <View style={styles.containerText}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.nameSong}
            >
              Adore You Adore You Adore You Adore You Adore You
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail">
              Son Tung MTP Son Tung MTP Son Tung MTP Son Tung MTP
            </Text>
          </View>
        </View>
        <View
          style={styles.containerButton}
        >
          <Ionicons name="play-skip-back-outline" size={25} color="black" />
          <Ionicons name="pause-circle" size={35} color="black" />
          <Ionicons name="play-skip-forward-outline" size={25} color="black" />
        </View>
      </View>:<View></View>}
       
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 60,
    backgroundColor: "#ddd",
    position: "absolute",
    bottom: 60,
    borderTopColor: "#bbb",
    borderBottomColor: "#bbb",
    flexDirection: "row",
  },
  containerImageTitle: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  containerButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "center",
    borderRadius: 70,
  },
  containerText: { width: 250 },
  nameSong:{ fontSize: 15, fontWeight: "bold" },
  
});
