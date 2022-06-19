import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Surface } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInAction } from "../../../redux/actions/users";

const { width, height } = Dimensions.get("screen");

export default function ProfileDetail() {
  const dispatch = useDispatch();
  const { dataSignIn } = useSelector((state) => state);
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
  const navigation = useNavigation();

  const checkButton = (input) => {
    if (input === "Signin") {
      navigation.navigate("SignIn");
    } else if (input === "Signout") {
      dispatch(signInAction(false, "", ""));
      navigation.navigate("SignIn");
    }
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
          <Text style={styles.name}>{dataSignIn.username}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={dataSignIn.isSignIn ? checkButton('Signout'):checkButton('Signin')}
            style={{
              width: 100,
              height: 30,
              backgroundColor: "#bbb",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{dataSignIn.isSignIn ? "Sign out" : "Sign in"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />
      {renderOption("music", "Songs", 20)}
      {renderOption("playlist-music", "Playlist", 25)}
      {renderOption("download", "Downloads", 10)}
      <View style={styles.divider} />
      <View style={styles.containerItems}>
        <Text style={styles.titleHistory}>History</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    width: 200,
    height: 60,
    fontSize: 20,
    color: "#000",
    fontWeight: 800,
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
