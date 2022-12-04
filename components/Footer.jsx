import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text>Drag and drop to reorder list</Text>
      
    </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})