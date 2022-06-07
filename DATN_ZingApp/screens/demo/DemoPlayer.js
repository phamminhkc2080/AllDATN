import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";

export default function DemoPlayer() {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audio/ChungTaKhongThuocVeNhau-SonTungMTP-4528181.mp3"),
      {shouldPlay: true}
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function pauseMusic() {
    await sound.pauseAsync();

    
  }
  
  async function replayMusic() {
    await sound.replayAsync();
    
  }
  async function stopMusic() {
    await sound.stopAsync();
    
  }
  
  


  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="next" />
      <View style={{ margin: 10 }} />
      <Button title="play" onPress={playSound} />
      <View style={{ margin: 10 }} />
      <Button title="pause" onPress={pauseMusic}/>
      <View style={{ margin: 10 }} />
      <Button title="stop" onPress={stopMusic}/>
      <View style={{ margin: 10 }} />
      <Button title="back" />
      <View style={{ margin: 10 }} />
      <Button title="Replay" onPress={replayMusic}/>
    </View>
  );
}

const styles = StyleSheet.create({});
