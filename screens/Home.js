import { Button, StyleSheet, Text, View, TouchableWithoutFeedback, SafeAreaView, FlatList, Keyboard, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { global } from '../styles/styles'
import { Header } from '../components/Header'
import { AddTask } from '../components/AddTask'
import { Task } from '../components/Task'
import uuid  from 'uuid';


const Home = ({navigation}) => {
    const goToTask = () => {
        navigation.navigate("Task")
    }
    const [tasks, setTasks] = useState([
        { "task": "HTML I", "done": true, "id": "1" },
        { "task": "CSS", "done": true, "id": "2" },
        { "task": "Responsive design", "done": true, "id": "3" },
    
      ])

  return (
    <View style={global.container}>
      <Text>Home</Text>
      <Button title='Go to task' onPress={goToTask}/>

          <FlatList
            data={tasks}
            renderItem={({item}) => <TouchableOpacity onPress={()=> navigation.navigate("Task", item)}>

                <Text>{item.task}</Text>
            </TouchableOpacity>}
          />

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
  
    },
    content: {
      padding: 30,
      flex: 1,
    },
    list: {
      marginTop: 30,
      backgroundColor: 'white',
      flex: 1
    }
  });
  

export default Home



// rnfes snippet