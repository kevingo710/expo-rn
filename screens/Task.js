import { View, Text, Button } from 'react-native'
import React from 'react'
import { global } from '../styles/styles'

export default function Task({navigation, route}) {
    const goToTask = () => {
        navigation.navigate("Home")
        // navigation.pop()
    }
  return (
    <View style={global.container}>
      <Text>{route.params.task}</Text>
      <Button title='Go to Home' onPress={goToTask}/>
    </View>
  )
}