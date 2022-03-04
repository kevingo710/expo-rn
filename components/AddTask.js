import React, {useState} from 'react'
import {  View, StyleSheet, Text, TextInput, Button } from 'react-native'

export const AddTask = ({addTask}) => {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }
  return (
    <View>
        <TextInput 
            placeholder='Insert new task'
            style={styles.input}
            onChangeText={changeHandler}
        />
        <Button title='Add Task' color='blue' onPress={ () => addTask(text)} />


    </View>
  )
}


const styles = StyleSheet.create({
    input: {
            margin: 20,
            paddingVertical: 6,
            borderBottomColor: 'blue',
            borderBottomWidth: 1,
            
            
    }
})
