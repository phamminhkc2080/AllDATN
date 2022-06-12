import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Demo(props) {
    console.log(props.item);
  return (
    <View>
      <Text>Demo</Text>
    </View>
  )
}

const styles = StyleSheet.create({})