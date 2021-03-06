import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { getDataPlaySongs, getSongArtists } from "../../redux/actions/songs";
import { request } from "../utils/Request";
import Song from "../home/songs/Song";
import PopularSongs from "../home/popular-songs/PopularSongs";
import { SongContext } from "../../contexts/SongContext";

const { width, height } = Dimensions.get("screen");

export default function ArtistsDetail(props) {
  let dataAritsts = props.route.params;

  const dispatch = useDispatch();
  const { statusSignIn } = useSelector((state) => state);
  const [dataAblum, setDataAlbum] = useState([]);

  const { artistsSongs, songControl } = useContext(SongContext);
  const {
    isShow,
    setShow,
    setArtistsSongs,
  } = songControl;

  useEffect(() => {
    request
      .get(
        "/albums/get-albums" +
          (dataAritsts.idArtist ? "?id=" + dataAritsts.idArtist : "")
      )
      .then((result) => {
        if (result?.data) {
          setDataAlbum(result?.data);
        } else {
          console.error("result.data not valid!");
        }
      })
      .catch((error) => console.error(error));

    request
      .get(
        "/songs/get-artists-songs" +
          (dataAritsts.idArtist ? "?id=" + dataAritsts.idArtist : "")
      )
      .then((result) => {
        // dispatch(getSongArtists(result?.data));
        // console.log('dataSOngsArtists : ',result.data)
        setArtistsSongs(result.data);
      })
      .catch((error) => console.error(error));
  }, []);

  // useEffect(() => {
  //   setShow(false);
  // }, [isShow]);

  const onHanderBack = () => {
    setShow(true);
    props.navigation.navigate("TabsNavigation");
  };

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

  const onHandlerPlayAll = () => {
    // dispatch(getDataPlaySongs(dataSongArtists));
    songControl.setSongs(artistsSongs);
    props.navigation.navigate("PlayerMusic");
  };
  // console.log('artistsSongNgoai : ',artistsSongs);

  return (
   
    <ScrollView style={styles.container}>
      <View>
        <Image
          resizeMode="cover"
          style={styles.imgArtists}
          source={{ uri: `https://application-mock-server.loca.lt/${dataAritsts.image}` }}
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.1)", "black"]}
          l
          style={{
            width: width,
            height: 360,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            position: "absolute",
          }}
        ></LinearGradient>

        <Icon
          style={styles.iconBack}
          name="arrow-left"
          size={30}
          color="white"
          onPress={onHanderBack}
        />

        <View style={styles.containerArtists}>
          <View>
            <Text style={styles.name}>{dataAritsts.name}</Text>
          </View>

          <View>
            <Text style={styles.textFollow}>
              {nFormatter(dataAritsts.follows)} Follow
            </Text>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.btnFollow}>
              <Text style={styles.textFollow}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnPlayAll}
              onPress={onHandlerPlayAll}
            >
              <Text style={styles.textPlayAll}>Play All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <PopularSongs
          title="Album"
          data={dataAblum}
          navigation={props.navigation}
        />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Songs</Text>
       
      </View>
      <View style={{ paddingLeft: 15 }}>
        <FlatList
          data={artistsSongs}
          keyExtractor={(item) => item.idSong}
          renderItem={({ item, index }) => {
            return (
              <Song
                item={item}
                indexSong={index}
                navigation={props.navigation}
                screenName="ArtistsDetail"
              />
            );
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconBack: {
    position: "absolute",
    right: 200,
  },
  imgArtists: {
    width: width,
    height: 360,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    margin: 10,
    fontSize: 20,
    color: "#000",
    marginLeft: 15,
    fontWeight: "bold",
  },
  containerIconList: {
    width: 55,
    height: 50,
    paddingRight: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  iconTitle: {
    width: 30,
    height: 30,
    marginTop: 10,
    alignItems: "center",
  },
  containerArtists: {
    top: 200,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
  },
  name: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
  },
  textFollow: {
    fontSize: 20,
    color: "white",
    shadowColor: "black",
  },
  containerButton: {
    padding: 10,
    width: width,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnFollow: {
    width: 210,
    height: 40,
    borderWidth: 2,
    borderRadius: 50,
    alignItems: "center",
    borderColor: "white",
    justifyContent: "center",
  },
  btnPlayAll: {
    width: 210,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    borderColor: "#721799",
    justifyContent: "center",
    backgroundColor: "#721799",
  },
  textFollow: {
    fontSize: 21,
    color: "white",
  },
  textPlayAll: {
    fontSize: 21,
    color: "white",
  },
});
