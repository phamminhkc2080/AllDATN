import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import PlaylistItem from "../components/PlaylistItem";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../utils/Request";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function DataPlaylist(props) {
  // console.log('props: ', )
  const data = props?.route?.params?.item
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { dataSignIn } = useSelector((state) => state);

  const [dataPlayslist, setDataPlaylist] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [namePlaylist,setNamePlaylist] = useState()

  const handleNamePlaylist =(value)=>{
    setNamePlaylist(value)
  }


  useEffect(() => {
    request
      .get(
        "/playlist/get-playlist-user" +
          (dataSignIn?.idUser ? "?id=" + dataSignIn?.idUser : "")
      )
      .then((result) => {
        if (result?.data) {
          setDataPlaylist(result?.data);
        } else {
          console.error("result.data not valid!");
        }
      })
      .catch((error) => console.error(error));
  }, []);
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleVisibleShow = () => {
    setModalVisible(true);
  };
  const handleAddPlayList =()=>{
    if(
      dataSignIn.idUser
    ){
      request
      .post("/playlist/add-playlist-user", {
        name: namePlaylist,
        idUser: dataSignIn?.idUser,
      })
      .then((result) => {
        console.log('ewewew : ', result.data)
      })
      .catch((error) => {
        console.error(error);
      });
    setModalVisible(false);
    }
   
    // addPlayList()
  }
  const onHanderBack = () => {
    navigation.navigate("TabsNavigation");
  };
  

  return (
    <View>
      <Modal
        transparent={true}
        onRequestClose={closeModal}
        visible={modalVisible}
        animationType="fade"
      >
        <View style={{ height: "100%", backgroundColor: "rgba(0,0,0,0.4)" }}>
          <View
            style={{
              height: "20%",
              width: "100%",
              backgroundColor: "#fff",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              top: 300,
              borderTopWidth: 1,
              borderTopColor: "#e5e5e5",
              justifyContent: "center",
              alignItems: "center",
              padding:20
            }}
          >
            <TextInput
              style={{
                width: "100%",
                height: 60,
                fontSize: 30,
                borderWidth: 1,
                borderColor: "#ccc",
                paddingBottom:10
              }}
              placeholder="Enter name playlist......"
              onChangeText={handleNamePlaylist}
            />
            <TouchableOpacity
              style={{
                width: "100%",
                height: 50,
                backgroundColor: "#96899C",
                justifyContent: "center",
                alignItems: "center",
                padding:20
              }}
              onPress={handleAddPlayList}
            >
              <Text>Add PlayList</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View>
      
        <Image
          style={{ width: "100%", height: 140 }}
          source={require("../../assets/images/PlayList.webp")}
        />
      </View>
      <Icon
          style={styles.iconBack}
          name="arrow-left"
          size={30}
          color="black"
          onPress={onHanderBack}
        />
      <View>
        <FlatList
          data={dataPlayslist}
          renderItem={({ item }) => {
            // return console.log("item : ", item);
            return <PlaylistItem item={item} data = {data} />;
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            height: 80,
            justifyContent: "flex-start",
            alignItems: "center",
            borderRadius: 10,
            padding: 10,
            backgroundColor: "#96899C",
          }}
          onPress={handleVisibleShow}
        >
          <AntDesign name="plussquareo" size={80} color="black" />
          <Text> ADD PLAYLIST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconBack: {
    position:'absolute'
  }
});
