import { StyleSheet, Text, View,TouchableWithoutFeedback,ImageBackground } from 'react-native'
import { Surface } from "react-native-paper";
import React from 'react'

export default function ListItem() {
  return (
    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',alignContent:'flex-start'}}>

    <TouchableWithoutFeedback
            // onPress={() => onHandlerPlaySong(item, index)}
          >
            <View style={styles.containerItem}>
              <Surface style={styles.surface}>
                <ImageBackground
                  source={require('../../assets/images/sontungmtp.webp')}
                  style={styles.img}
                ></ImageBackground>
              </Surface>

              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
                Son Tung
              </Text>

              <Text style={styles.artists}>Son Tung</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            // onPress={() => onHandlerPlaySong(item, index)}
          >
            <View style={styles.containerItem}>
              <Surface style={styles.surface}>
                <ImageBackground
                  source={require('../../assets/images/sontungmtp.webp')}
                  style={styles.img}
                ></ImageBackground>
              </Surface>

              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
                Son Tung
              </Text>

              <Text style={styles.artists}>Son Tung</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            // onPress={() => onHandlerPlaySong(item, index)}
          >
            <View style={styles.containerItem}>
              <Surface style={styles.surface}>
                <ImageBackground
                  source={require('../../assets/images/sontungmtp.webp')}
                  style={styles.img}
                ></ImageBackground>
              </Surface>

              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
                Son Tung
              </Text>

              <Text style={styles.artists}>Son Tung</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            // onPress={() => onHandlerPlaySong(item, index)}
          >
            <View style={styles.containerItem}>
              <Surface style={styles.surface}>
                <ImageBackground
                  source={require('../../assets/images/sontungmtp.webp')}
                  style={styles.img}
                ></ImageBackground>
              </Surface>

              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
                Son Tung
              </Text>

              <Text style={styles.artists}>Son Tung</Text>
            </View>
          </TouchableWithoutFeedback>
    </View>

  )
}

const styles = StyleSheet.create({
    containerItem: {
        justifyContent: "center",
        padding:10,
        backgroundColor:'#bbb'
      },
      iconTitle: {
        width: 30,
        height: 30,
      },
      title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
      },
      surface: {
        elevation: 15,
        height: 130,
        width: 130,
        borderRadius: 10,
        overflow: "hidden",
        flexDirection: "column",
      },
      img: {
        height: 130,
        width: 130,
        borderRadius: 5,
        padding: 10,
      },
      name: {
        width: 130,
        color: "#000",
        fontWeight: "bold",
        fontSize: 18,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 5,
      },
      artists: {
        color: "#B3B6B7",
        fontWeight: "bold",
        fontSize: 14,
      },
      containerIconList: {
        width: 55,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
      }
})