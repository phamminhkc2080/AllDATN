import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Surface } from "react-native-paper";


const { width, height } = Dimensions.get("window");

export function Song(props) {
  console.log("dataSong : ", props.item);

  const [modalVisible, setModalVisible] = useState(false);
  const playSong = (item) => {
    props.navigation.navigate("PlayerMusic");
    // , { item: item }
    // console.log('item : ', item);
  };

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  let itemPro = props.item;

  return (
    <View>
        <Text>{props.item}</Text>
      {/* <Modal
        transparent={true}
        onRequestClose={() => closeModal()}
        visible={modalVisible}
        animationType="fade"
      >
        <View style={{ height: "100%", backgroundColor: "rgba(0,0,0,0.4)" }}>
          <View style={styles.modal}>
            <Surface style={styles.surface}>
              <Image source={itemPro.img} style={styles.modalImg} />
            </Surface>

            <View style={styles.modalData}>
              <View style={styles.playerContainer}>
                <Text style={styles.title}>{itemPro.title}</Text>
                <Text style={styles.subTitle}>{itemPro.subTitle}</Text>
                <TouchableOpacity style={styles.btn}>
                  <Icon name="play" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.option}>
                <Icon name="heart" size={30} color="#ff5b77" />
                <Text style={styles.text}>Add To Favourite</Text>
              </View>
              <View style={styles.option}>
                <Icon name="playlist-plus" size={30} color="#000" />
                <Text style={styles.text}>Add To Playlist</Text>
              </View>
              <View style={styles.option}>
                <Icon name="album" size={30} color="#000" />
                <Text style={styles.text}>Create Album</Text>
              </View>
              <View style={styles.option}>
                <Icon name="download" size={30} color="#000" />
                <Text style={styles.text}>Download</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableWithoutFeedback
        style={styles.songContainer}
        onPress={() => playSong(itemPro)}
      >
        <View style={{ flexDirection: "row", paddingBottom: 10 }}>
          <Image source={itemPro.img} style={styles.img} />
          <View style={styles.dataContainer}>
            <Text style={styles.songtitle}>{itemPro.title}</Text>
            <Text style={styles.subTitle}>{itemPro.subTitle}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name="download"
              color="gray"
              size={30}
              style={{ marginRight: 10 }}
            />
            <TouchableOpacity onPress={() => openModal()}>
              <Icon name="dots-vertical" color="gray" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  songContainer: {
    width: width,
    height: 70,
  },
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
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modal: {
    height: "70%",
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
  },
  modalImg: {
    height: 180,
    width: 180,
  },
  surface: {
    height: 180,
    width: 180,
    alignSelf: "center",
    position: "absolute",
    overflow: "hidden",
    top: -100,
    borderRadius: 20,
    elevation: 20,
  },
  modalData: {
    marginTop: 100,
  },
  option: {
    height: 50,
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#e5e5e5",
  },
  text: {
    marginLeft: 15,
    color: "#000",
    fontSize: 20,
  },
  playerContainer: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#ff5b77",
    elevation: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
