import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';


// import Header from './components/Header';
import Todos from './components/Todos';

import {Todos as TodoData, COLORS} from './constants';
import { useState } from 'react';

export default function App() {


  const [loaded] = useFonts({
    JosefinBold:require('./assets/fonts/JosefinSans-Bold.ttf'),
    JosefinRegular:require('./assets/fonts/JosefinSans-Regular.ttf'),
  });

  const [todos, updateTodos] = useState(()=>[...TodoData]);
  const terminator = {
        id:"xx",
        task:null,
    }

  if(!loaded) return null;


  return (
    <View style={styles.container}>

      {/* <Header/> */}
      <Todos 
        todos={[...todos,terminator]} 
        addNew={(newTask)=>updateTodos((p)=>[ ...p, newTask,  ])}
        deleteTask={(id)=>updateTodos((p)=>p.filter((t)=>t.id !== id))}
        updateTask={(task)=>updateTodos(p=>p.map(t=>{
          if (t.id === task.id) return task;
          return t
        }))}
      />
      {/* <Footer/> */}
      
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:0,
    backgroundColor: COLORS.lightMode.veryLightGray,
  },
});
