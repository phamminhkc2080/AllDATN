import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import ProfileDetail from "./profile-detail/ProfileDetail";
import Songs from "../home/songs/Songs";

export default function ProfileScreen({navigation}) {
  return (
    <View>
      <Text style={styles.title}>Profile</Text>
      <ScrollView>
        <ProfileDetail />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    margin: 10,
    marginLeft: 15,
  },
});
