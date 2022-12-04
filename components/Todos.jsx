import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Input } from '@rneui/base';
import { Todos } from '../constants';



const TodoItem = ({todo})=>{
  return (
    <View>
      <View></View>
      <Text>{todo.task}</Text>
    </View>
  )
}

const TodoList = () => {
  return (
    <View style={styles.container}>
      
      {
        Todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/>)
      }
    </View>
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
    flex:3,
  }
})