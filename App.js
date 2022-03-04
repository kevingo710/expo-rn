import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, FlatList, SafeAreaView, Alert, Keyboard } from 'react-native';
import {Header} from './components/Header'
import {Task} from './components/Task'
import {AddTask} from './components/AddTask'
import uuid  from 'uuid';
export default function App() {
  const [tasks, setTasks] = useState([
    { "task": "HTML I", "done": true, "id": "1" },
    { "task": "CSS", "done": true, "id": "2" },
    { "task": "Responsive design", "done": true, "id": "3" },

  ])
  const addTask = (text) => {
    if(!text){
      Alert.alert('No tasks?', 'Please add a task', [{text: 'OK', style: 'destructive'}])
    }else{
      setTasks(prevTasks => {
        return [{task: text, id: uuid() }, ...prevTasks]
      })
    }


  }
  return (
    <TouchableWithoutFeedback onPress={ ()=> Keyboard.dismiss()}>
    <SafeAreaView style={styles.container}>
      <Header />
      <AddTask addTask={addTask}/>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({item}) => <Task item={item} />}
          />
        </View>

      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    padding: 30
  },
  list: {
    marginTop: 30
  }
});
