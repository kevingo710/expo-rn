import { Button, StyleSheet, Text, View, TouchableWithoutFeedback, SafeAreaView, FlatList, Keyboard, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import { global } from '../styles/styles'
import { Header } from '../components/Header'
import { AddTask } from '../components/AddTask'
import { Task } from '../components/Task'
import uuid  from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, didTask } from '../store/taskAction'
import { AntDesign } from '@expo/vector-icons';


const Home = ({navigation}) => {

  const dispatch = useDispatch();
    const goToTask = () => {
        navigation.navigate("Task")
    }
    // const [tasks, setTasks] = useState([
    //     { "task": "HTML I", "done": true, "id": "1" },
    //     { "task": "CSS", "done": true, "id": "2" },
    //     { "task": "Responsive design", "done": true, "id": "3" },
    
    //   ])

const tasks = useSelector(state => state.tasks)

      const [text, setText] = useState('')
      const changeHandler = (val) => {
        setText(val)
    }

    const submitTask = (text) => dispatch(addTask(text));
    const removeTask = (id) => dispatch(deleteTask(id));
    const checkTask = (id) => dispatch(didTask(id))
  return (
    <View style={global.container}>
      <Text>Home</Text>
      <Button title='Go to task' onPress={goToTask}/>
      <TextInput 
            placeholder='Insert new task'
            style={styles.input}
            onChangeText={changeHandler}
        />
                <Button title='Add Task' color='blue' onPress={ () => submitTask(text)} />

          <FlatList
            data={tasks}
            renderItem={({item}) => <TouchableOpacity style={global.taksItem} onPress={()=> navigation.navigate("Task", item)}>

                <Text style={{width: 120}}>{item.task}</Text>
                
                <AntDesign name={!item.done ? "checkcircleo":"checkcircle"} size={24} color="black" onPress={ ()=> checkTask(item.id)}/>
                <AntDesign name="delete" size={24} color="black"  onPress={ ()=> removeTask(item.id)}/>
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
    },
    input: {
      margin: 20,
      paddingVertical: 6,
      borderBottomColor: 'blue',
      borderBottomWidth: 1,
      
      
}
  });
  

export default Home



// rnfes snippet