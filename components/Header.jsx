import { StyleSheet,View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { assets, FONTS,COLORS } from '../constants';
import { Icon } from '@rneui/base';
import { TaskInput } from './Todos';

const Header = () => {
    
    return (
      <ImageBackground
          source={assets.heroBg}
          resizeMode={"cover"}
          style={styles.container}
      >


        <View>
          <Text style={styles.title}>
            Todi
          </Text>

          <View style={styles.moon}>
            <Icon
              name={"sun"}
              type="feather"
              color={COLORS.lightMode.lightGrayishBlue}
            />
          </View>
        </View>


        <TaskInput/>
        
      </ImageBackground>
    )
}

export default Header;



const styles = StyleSheet.create({
  container:{
    // flex:2,
    height:300,
    maxHeight:'50%',
    width:'100%',
  }
})