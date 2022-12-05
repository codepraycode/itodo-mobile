import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Footer = ({children}) => {
  return (
    <View style={styles.container}>
      {children}


      
      
    </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
  container:{
    // flex:1,
  }
})