import React from 'react'
import StackNavigation from './StackNavigation'
import { NavigationContainer } from '@react-navigation/native'

export default function Router() {
  return (
    <NavigationContainer>
     <StackNavigation/>
    </NavigationContainer>
  )
}