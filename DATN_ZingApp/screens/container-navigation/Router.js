import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import StackNavigation from "./StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import MiniPlayMusic from "../player/MiniPlayMusic";

export default function Router() {
  return (
    <NavigationContainer>
      <StackNavigation />
      <MiniPlayMusic/>
       
    </NavigationContainer>
  );
}


