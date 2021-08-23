import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import {Provider} from 'react-redux'
import MainNavigation from './Navigation/MainNavigation'
import Home from './Screen/Home'
import store from './stateManagement/Store/store'

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  )
}

export default App


