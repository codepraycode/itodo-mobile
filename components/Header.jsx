import { StyleSheet,View, Text, ImageBackground, } from 'react-native'
import React from 'react'
import { assets, FONTS,COLORS, SIZES } from '../constants';
import { Icon } from '@rneui/base';
import { Input } from '@rneui/themed';


const TaskInput = ()=>{
  return (
    <View style={styles.taskContainer}>

      <View  style={styles.taskChecker}></View>
      <Input 
        // containerStyle={{backgroundColor:'red',}} 
        inputContainerStyle={{borderBottomWidth:0,}}
        inputStyle={styles.inputStyle}
        // errorMessage={null}
        errorStyle={{display:"none"}}
      />

    </View>
  )
}


const Header = () => {
    
    return (
      <ImageBackground
          source={assets.heroBg}
          resizeMode={"cover"}
          style={styles.container}
      >


        <View style={styles.top}>
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
    height:280,
    maxHeight:'50%',
    width:'100%',

    flexDirection:'column',
    alignItems:'center',
    
  },

  top:{
    
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',

    paddingVertical:20,
    paddingHorizontal:25,
    marginTop:20,
    
    
    width:"100%",
  },

  title:{
    fontSize:SIZES.extraLarge * 2,
    fontFamily:FONTS.bold,
    color:COLORS.lightMode.veryLightGray,
  },

  inputStyle:{
          borderBottomWidth:0, 
          fontFamily:FONTS.regular, 
          color:COLORS.darkMode.veryDarkDesaturatedBlue
        },


  taskContainer:{

    // flex:1,
    width:"95%",
    paddingVertical:10,
    // paddingHorizontal:10,
    paddingLeft:10,
    paddingRight:3,

    marginTop:40,

    backgroundColor:COLORS.lightMode.veryLightGray,

    flexDirection:'row',
    alignItems:'center',

    borderRadius:6,


  },

  taskChecker:{
    width:20,
    height:20,
    borderColor:COLORS.lightMode.veryLightGrayishBlue,
    borderWidth:1,
    borderRadius:10,

    marginRight:10,
  },
})