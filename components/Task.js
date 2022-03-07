import React from 'react'
import {  TouchableOpacity, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { global } from '../styles/styles';

export const Task = ({item, deleteTask}) => {
  return (
    <TouchableOpacity style={global.taksItem}>
        <Text>
        {item.task}
        </Text>
        <AntDesign name="delete" size={24} color="black"  onPress={ ()=> deleteTask(item.id)}/>
        </TouchableOpacity>
  )
}

