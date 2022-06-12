import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function HeaderHome(props) {
  const gotoResultSearch = () => {
    props.navigation.navigate("ResultsSearch");
  };

  const gotoFrofile = () => {
    props.navigation.navigate("Frofile");
  };

  return (
    <SafeAreaView>
      <View style={styles.constainer}>
        <TouchableOpacity onPress={gotoFrofile}>
          <Image
            resizeMode="cover"
            style={styles.imageUser}
            source={require("../../../assets/images/b1.jpg")}
          />
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={gotoResultSearch}>
          <View style={styles.searchSection}>
            <Ionicons
              style={styles.searchIcon}
              name="search"
              size={20}
              color="#000"
            />
            <TextInput
              editable={false}
              placeholder="Search...."
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
        </TouchableWithoutFeedback>

        <Feather name="settings" size={30} color="black" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  constainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 20,
  },
  searchSection: {
    height: 40,
    width: "75%",
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#e8e8e8",
    marginLeft: "2.5%",
    marginRight: "2.5%",
  },
  searchIcon: {
    width: 40,
    height: 40,
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  input: {
    width: "70%",
    color: "#000000",
  },

  imageUser: {
    width: 32,
    height: 32,
    borderRadius: 20,
  },
});
