import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TopArtists(props) {

  const gotoArtitsDetail=()=>{
    props.navigation.navigate("ArtistsDetail");
  }

  return (
    <View style={styles.constainer}>
      <View style={styles.searchSection}>
        <Ionicons
          style={styles.searchIcon}
          name="search"
          size={20}
          color="#000"
        />
        <TextInput
          placeholder="Search...."
          style={styles.input}
          underlineColorAndroid="transparent"
        />
      </View>
     <ScrollView>
      <View style={styles.containerComponent}>
        <TouchableOpacity style={styles.containerArtits} onPress={gotoArtitsDetail}>
          <View>
            <Image
              style={styles.imgArtists}
              source={require("../../assets/images/sontungmtp.webp")}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textName}>Sơn Tùng M-TP</Text>
            <Text style={styles.textFollow}>2.3M Follow</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerFollow}>
          <TouchableOpacity style={styles.buttonFollow}>
            <Text style={styles.textFollow}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerComponent}>
        <TouchableOpacity style={styles.containerArtits} onPress={gotoArtitsDetail}>
          <View>
            <Image
              style={styles.imgArtists}
              source={require("../../assets/images/cs1.jpg")}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textName}>Sơn Tùng M-TP</Text>
            <Text style={styles.textFollow}>2.3M Follow</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerFollow}>
          <TouchableOpacity style={styles.buttonFollow}>
            <Text style={styles.textFollow}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerComponent}>
        <TouchableOpacity style={styles.containerArtits} onPress={gotoArtitsDetail}>
          <View>
            <Image
              style={styles.imgArtists}
              source={require("../../assets/images/cs2.jpg")}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textName}>Sơn Tùng M-TP</Text>
            <Text style={styles.textFollow}>2.3M Follow</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerFollow}>
          <TouchableOpacity style={styles.buttonFollow}>
            <Text style={styles.textFollow}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerComponent}>
        <TouchableOpacity style={styles.containerArtits} onPress={gotoArtitsDetail}>
          <View>
            <Image
              style={styles.imgArtists}
              source={require("../../assets/images/cs3.jpg")}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textName}>Sơn Tùng M-TP</Text>
            <Text style={styles.textFollow}>2.3M Follow</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerFollow}>
          <TouchableOpacity style={styles.buttonFollow}>
            <Text style={styles.textFollow}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerComponent}>
        <TouchableOpacity style={styles.containerArtits} onPress={gotoArtitsDetail}>
          <View>
            <Image
              style={styles.imgArtists}
              source={require("../../assets/images/cs4.jpg")}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textName}>Sơn Tùng M-TP</Text>
            <Text style={styles.textFollow}>2.3M Follow</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerFollow}>
          <TouchableOpacity style={styles.buttonFollow}>
            <Text style={styles.textFollow}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerComponent}>
        <TouchableOpacity style={styles.containerArtits} onPress={gotoArtitsDetail}>
          <View>
            <Image
              style={styles.imgArtists}
              source={require("../../assets/images/cs5.jpg")}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textName}>Sơn Tùng M-TP</Text>
            <Text style={styles.textFollow}>2.3M Follow</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerFollow}>
          <TouchableOpacity style={styles.buttonFollow}>
            <Text style={styles.textFollow}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerComponent}>
        <TouchableOpacity style={styles.containerArtits} onPress={gotoArtitsDetail}>
          <View>
            <Image
              style={styles.imgArtists}
              source={require("../../assets/images/sontungmtp.webp")}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textName}>Sơn Tùng M-TP</Text>
            <Text style={styles.textFollow}>2.3M Follow</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerFollow}>
          <TouchableOpacity style={styles.buttonFollow}>
            <Text style={styles.textFollow}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerComponent}>
        <TouchableOpacity style={styles.containerArtits} onPress={gotoArtitsDetail}>
          <View>
            <Image
              style={styles.imgArtists}
              source={require("../../assets/images/sontungmtp.webp")}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textName}>Sơn Tùng M-TP</Text>
            <Text style={styles.textFollow}>2.3M Follow</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerFollow}>
          <TouchableOpacity style={styles.buttonFollow}>
            <Text style={styles.textFollow}>Follow</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: "column",
  },
  searchSection: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e8e8e8",
    marginLeft: 3,
  },
  searchIcon: {
    width: 40,
    height: 40,
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  input: {
    width: "75%",
    color: "#000000",
  },
  containerComponent: {
    flexDirection: "row",
    padding: 13,
  },
  containerArtits: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around",
  },
  imgArtists: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  containerText: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  textName: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  textFollow: {
    fontSize: 15,
    fontWeight: "500",
  },
  containerFollow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 15,
  },
  buttonFollow: {
    width: "80%",
    height: 33,
    borderWidth: 2,
    borderColor: "#9A9B9C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  textFollow: {
    fontWeight: "700",
    fontSize: 15,
  },
});
