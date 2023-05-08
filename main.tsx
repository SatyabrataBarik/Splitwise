import { View, Text } from 'react-native'
import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import store from './src/Redux/store'

const main = () => {
  return (
    <Provider store={store}>
    <App/>
    </Provider>
    
  )
}

export default main