import React from 'react'
import { View } from 'react-native'
import StackNavigation from './StackNavigation'
import { NavigationContainer } from '@react-navigation/native'

export default function Router() {
  return (
    <NavigationContainer>
     <StackNavigation/>
     {/* <View style={{width:"100%",height:100,backgroundColor:'red',position:'absolute',bottom:60}}></View> */}

    </NavigationContainer>
  )
}