import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../Screens/Home';
const tab=createBottomTabNavigator();
const BottomNavigation = () => {
  return (
   <tab.Navigator>
    <tab.Screen component={Home} name='home'/>
   </tab.Navigator>
  )
}

export default BottomNavigation