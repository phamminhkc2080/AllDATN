import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

export default function StartScreen() {
  const navigation = useNavigation();
  const zoomIn = {
    0: {
      scale: 0,
    },
    0.5: {
      scale: 0.5,
    },
    1: {
      scale: 1,
    },
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.title}>Music App</Text>
      <Animatable.Image
        animation={zoomIn}
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("TabsNavigation")}
      >
        <Text style={styles.text}>Start Listening</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    color: "#000",
    fontWeight: "bold",
  },
  logo: {
    width: 400,
    height: 270,
    marginTop: 20,
    marginBottom: 40,
    resizeMode: "cover",
  },
  btn: {
    width: 180,
    height: 50,
    borderRadius: 20,
    elevation: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff5b77",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
