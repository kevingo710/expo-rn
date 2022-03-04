import React from 'react'
import {  TouchableOpacity, StyleSheet, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export const Task = ({item, deleteTask}) => {
  return (
    <TouchableOpacity style={styles.taksItem}>
        <Text>
        {item.task}
        </Text>
        <AntDesign name="delete" size={24} color="black"  onPress={ ()=> deleteTask(item.id)}/>
        </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    taksItem: {
        borderColor: 'black',
        borderStyle: 'dashed',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})