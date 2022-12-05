import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, FONTS, SIZES} from '../constants';
import Header from './Header';
import { Icon } from '@rneui/themed';



const TodoItem = ({todo, total, deleteTask, updateTask,clearCompleted})=>{
  if(!todo.task){
    return (
      <View style={styles.taskActions}>

        <Text style={styles.fadeText}>{total > 0 ? `${total} task${total > 1 ? 's':'' } left` : "No task"}</Text>

        <TouchableOpacity 
          onPress={()=>clearCompleted()}
        >
          <Text style={total > 0 ? styles.deepText : styles.fadeText}>Clear completed</Text>
        </TouchableOpacity>

        
      </View>
    )
  }
  return (
    <TouchableOpacity 
      style={styles.taskContainer} 
      onPress={()=>updateTask({...todo, completed:!todo.completed})}
      onLongPress={()=>deleteTask(todo.id)}
    >
      <View style={[styles.taskChecker, todo.completed && styles.checkerChecked]}>
        {
          todo.completed && (
            <Icon
              name={"ios-checkmark-done-circle-outline"}
              type="ionicon"
              color={COLORS.lightMode.veryLightGray}
              style={{
                position:'relative',
                top:-4,
                left:-2,
              }}

            />
          )
        }
        
      </View>
      <Text style={[styles.task, todo.completed && styles.checked]}>{todo.task}</Text>
    </TouchableOpacity>
  )
}


const TaskFilters = ({filter, changeFilter})=>{
  return (
    <View style={styles.taskFilters}>
      <TouchableOpacity 
        onPress={()=>changeFilter()} // same as all
      >
        <Text style={[styles.deepText, filter === 'all' && styles.activeText]}>All</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={()=>changeFilter('active')}
      >
        <Text style={[styles.deepText, filter === 'active' && styles.activeText]}>Active</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={()=>changeFilter('completed')}
      >
        <Text  style={[styles.deepText, filter === 'completed' && styles.activeText]}>Completed</Text>
      </TouchableOpacity>
      
      
      
    </View>
  )
}

const TodoList = ({todos:Todos, addNew,alreadyExist, deleteTask, updateTask, filter, changeFilter, clearCompleted}) => {

  return (
    <>
      <View style={styles.container}>
        
        <FlatList 
          contentContainerStyle={styles.content}
          
          data={Todos}
          renderItem={({item:todo})=><TodoItem todo={todo} total={Todos.length-1} deleteTask={deleteTask} updateTask={updateTask} clearCompleted={clearCompleted}/>}
          keyExtractor={(item)=> item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={<View style={styles.line}></View>}
          
          ListHeaderComponent={<Header addNew={addNew} alreadyExist={alreadyExist}/>}
          
          ListFooterComponent={()=>(
            <>
              <TaskFilters filter={filter} changeFilter={changeFilter}/>


              <View style={styles.footer}>
                <Text style={styles.fadeText}>Drag and drop to reorder list</Text>
              </View>
            </>
          )}
        />

        
      </View>

    </>
  )
}

export default TodoList;


const styles = StyleSheet.create({
  container:{
    alignItems:'center',    
    width: '100%',
  },

  content:{
    maxWidth:'99%',
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
    backgroundColor:'transparent',
    borderWidth:1,
    borderRadius:10,
    marginRight:10,

  },
  task:{
    fontFamily:FONTS.regular, 
    fontSize:SIZES.font,
  },
  checkerChecked:{
    borderColor:COLORS.checkerBgcolor,
    backgroundColor:COLORS.darkMode.veryDarkDesaturatedBlue,
  },
  checked:{
    color:COLORS.darkMode.darkGrayishBlue,
    textDecorationLine:'line-through',
  },
  taskActions:{
    borderTopWidth:1,
    borderTopColor:COLORS.lightMode.veryLightGray,
    padding:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',



  },

  taskFilters: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginTop:15,
    paddingVertical:13,
    backgroundColor:COLORS.lightMode.veryLightGray,
    ...SHADOWS.dark,
  },


  footer:{

    justifyContent:'center',
    alignItems:'center',

    marginVertical:20,
  },



  fadeText:{
    fontFamily:FONTS.regular, 
    fontSize:SIZES.font,
    color:COLORS.lightMode.darkGrayishBlue,
  },
  deepText:{
    fontFamily:FONTS.bold, 
    fontSize:SIZES.font,
    color:COLORS.darkMode.darkGrayishBlue,
  },
  activeText:{
    
    color:COLORS.activeLink,
  }
})