import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { global } from '../styles/styles'
import { useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons';

const About = () => {

  const tasks = useSelector( state => state.tasks);
  const tasksDone = tasks.filter( item => item.done === true)
  return (
    <View style={global.container}>
      <Text>About</Text>
      <FlatList
            data={tasksDone}
            renderItem={({item}) => <TouchableOpacity style={global.taksItem} onPress={()=> navigation.navigate("Task", item)}>

                <Text style={{width: 120}}>{item.task}</Text>
                
                <AntDesign name={!item.done ? "checkcircleo":"checkcircle"} size={24} color="black" onPress={ ()=> checkTask(item.id)}/>
                <AntDesign name="delete" size={24} color="black"  onPress={ ()=> removeTask(item.id)}/>
            </TouchableOpacity>}
          />
    </View>
  )
}

export default About