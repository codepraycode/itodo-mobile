import { View, Text, StyleSheet,FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Input } from '@rneui/base';
import { COLORS, Todos, SHADOWS} from '../constants';
import Footer from './Footer';
import Header from './Header';



const TodoItem = ({todo})=>{
  if(!todo){
    return (
      <View style={styles.taskActions}>
        <Text>5 items left</Text>

        <Text>Clear completed</Text>
      </View>
    )
  }
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskChecker}></View>
      <Text style={styles.task}>{todo.task}</Text>
    </View>
  )
}


const TaskFilters = ()=>{
  return (
    <View style={styles.taskFilters}>
      <Text>All</Text>
      <Text>Active</Text>
      <Text>Completed</Text>
    </View>
  )
}

const TodoList = () => {
  return (
    <>
      <View style={styles.container}>
        
        <FlatList 
          contentContainerStyle={styles.content}
          
          data={Todos}
          renderItem={({item:todo})=><TodoItem todo={todo}/>}
          keyExtractor={(item)=> item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={<View style={styles.line}></View>}
          ListHeaderComponent={<Header/>}
          
          ListFooterComponent={()=>(
            <>
              <TaskFilters/>


              <View style={styles.footer}>
                <Text>Drag and drop to reorder list</Text>
              </View>
            </>
          )}
        />

        
      </View>

    </>
  )
}

export default TodoList;


export const TaskInput = ()=>{
  return (
    <View>

      <View></View>
      <Input/>

    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    // flex:3,
    alignItems:'center',
    
    width: '100%',
    
    // ...SHADOWS.dark,
    
  },

  content:{
    maxWidth:'99%',
    // position:'relative',
    
    width:500,
    backgroundColor:COLORS.lightMode.veryLightGray,
    borderRadius:10,
  },

  line:{
    height:1,
    backgroundColor:COLORS.lightMode.veryLightGrayishBlue,
  },
  
  taskContainer:{
    paddingVertical:20,
    // paddingHorizontal:10,
    paddingLeft:10,
    paddingRight:3,
    backgroundColor:'transparent',

    flexDirection:'row',
    alignItems:'center',

  },

  taskChecker:{
    width:20,
    height:20,
    borderColor:COLORS.lightMode.veryLightGrayishBlue,
    borderWidth:1,
    borderRadius:10,

    marginRight:10,
  },

  task:{
    
  },

  taskActions:{
    borderTopWidth:1,
    borderTopColor:COLORS.lightMode.veryLightGrayishBlue,
    padding:15,
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'space-around',
  },

  taskFilters: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    // width:'100%',
    // paddingTop:10,
    marginTop:30,
    paddingVertical:10,
    backgroundColor:COLORS.lightMode.veryLightGray,
    ...SHADOWS.dark,
  },


  footer:{

    justifyContent:'center',
    alignItems:'center',

    marginVertical:20,
  }
})