import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();



import Home from '../Screen/Home';
import { color } from '../constant/colors';
import About from '../Screen/About';
import Settengs from '../Screen/Settengs';

const stack = createNativeStackNavigator();
const bottomTab = createBottomTabNavigator();
const leftDrawer=createDrawerNavigator();



export default function MainNavigation() {
  return (
    <NavigationContainer>
      <leftDrawer.Navigator >
        <leftDrawer.Screen name="Home" component={Home} />
        <leftDrawer.Screen name="about" component={About} />
        <leftDrawer.Screen name="settings" component={Settengs} />
      </leftDrawer.Navigator>
    </NavigationContainer>
  )
}
