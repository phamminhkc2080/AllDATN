import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  SafeAreaView,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../utils/Request";
import { getSongSearch } from "../../redux/actions/songs";
import Song from "../home/songs/Song";

const { width, height } = Dimensions.get("screen");

export default function ResultsSearch({ navigation }) {
  const [textSearch, setTextSearch] = useState();

  const dispatch = useDispatch();
  const { dataSongsSearch } = useSelector((state) => state);
  const handlerTextSearch = (text) => {
    setTextSearch(text);
    request
      .get(
        "/songs/get-songs-search" +
          (textSearch ? "?search=" + textSearch : "?search=")
      )
      .then((result) => {
        if (result?.data) {
          dispatch(getSongSearch(result.data));
        } else {
          console.error("result.data not valid!");
        }
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    handlerTextSearch();
  }, [textSearch]);
  console.log(dataSongsSearch);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <View style={styles.searchSection}>
            <Ionicons
              style={styles.searchIcon}
              name="search"
              size={20}
              color="#000"
            />
            <TextInput
              onChangeText={handlerTextSearch}
              placeholder="Search...."
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
          <View>
            {dataSongsSearch.length > 0 && (
              <Text style={styles.title}>Result Search</Text>
            ) }
            <FlatList
              data={dataSongsSearch}
              renderItem={({ item, index }) => {
                return (
                  <View style={{ paddingHorizontal: 10 }}>
                    <Song
                      item={item}
                      navigation={navigation}
                      index={index}
                      screenName="ResultSearch"
                    />
                  </View>
                );
              }}
              keyExtractor={(item) => item.idSong}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    margin: 10,
    marginLeft: 15,
  },
  inputContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 45,
    padding: 10,
    color: "#000",
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "gray",
    marginRight: 5,
    fontSize: 18,
  },
  searchBtn: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 30,
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

  searchIcon: {
    padding: 10,
  },
  input: {
    color: "#000000",
  },
  containerItems: {
    width: width,
  },
});
