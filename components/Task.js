import React from 'react'
import {  TouchableOpacity, StyleSheet, Text } from 'react-native'


export const Task = ({item}) => {
  return (
    <TouchableOpacity style={styles.taksItem}>
        <Text>
        {item.task}
        </Text>
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
        padding: 15
    }
})