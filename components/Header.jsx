import { StyleSheet,View, Text, ImageBackground, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import { assets, FONTS,COLORS, SIZES } from '../constants';
import { Icon } from '@rneui/base';
import { Input } from '@rneui/themed';


const TaskInput = ({addNewTask, alreadyExist})=>{

  const [newTask, setNewTask ] = useState('');
  const [error, setError] = useState(null);


  const handleCreateTaskItem = () =>{

    if(!Boolean(newTask)) return;

    if(alreadyExist(newTask)) return setError("Task already exist");

    addNewTask({
      id: new Date().getTime(),
      task:newTask,
      completed:false,
      createdAt: new Date(),
      updatedAt: new Date(),
      platform:'mobile'

    });

    setNewTask('');
    
  }

  return (
    <View style={styles.taskContainer}>

      <View  style={styles.taskChecker}></View>
      <Input 
        
        inputContainerStyle={{borderBottomWidth:0,}}
        inputStyle={styles.inputStyle}
        cursorColor={COLORS.darkMode.veryDarkDesaturatedBlue}

        errorMessage={error}
        errorStyle={!error && {display:"none"}}
        autoCapitalize={true}
        autoComplete={"off"}
        blurOnSubmit={true}
        autoFocus={true}


        value={newTask}
        onChangeText={(v)=>{setNewTask(()=>v); setError(null)}}
        // ref={inputRef}
        onEndEditing={handleCreateTaskItem}
      />

    </View>
  )
}


const Header = ({addNew:addNewTask, alreadyExist}) => {
    
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


          <TouchableOpacity
            onPress={()=>{console.log("Pressed theme toggler")}}
          >

            <Icon
              name={"sun"}
              type="feather"
              color={COLORS.lightMode.lightGrayishBlue}
            />

          </TouchableOpacity>

          
        </View>


        <TaskInput addNewTask={addNewTask} alreadyExist={alreadyExist}/>
        
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