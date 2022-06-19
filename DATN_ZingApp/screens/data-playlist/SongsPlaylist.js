import { StyleSheet, Text, View ,SafeAreaView,TextInput, TouchableWithoutFeedback} from "react-native";
import React from "react";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function SongsPlaylist() {
  return (
    <SafeAreaView>
      <View style={styles.constainer}>
        <TouchableWithoutFeedback >
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
        width: "100%",
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
