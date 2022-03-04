import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Header = () => {
  return (
    <View style={styles.header}><Text style={styles.textHeader}>Kevingo Notes</Text></View>
  )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'seashell',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        color: 'black',
    }
})