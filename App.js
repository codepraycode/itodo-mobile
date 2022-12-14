import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

// import Header from './components/Header';
import Todos from './components/Todos';

import {Todos as DummyTodos, COLORS,TODOS_STORAGE_KEY} from './constants';
import { useEffect, useState } from 'react';

export default function App() {


  const [loaded] = useFonts({
    JosefinBold:require('./assets/fonts/JosefinSans-Bold.ttf'),
    JosefinRegular:require('./assets/fonts/JosefinSans-Regular.ttf'),
  });



  const { getItem, setItem } = useAsyncStorage(TODOS_STORAGE_KEY);
  
  const [todos, updateTodos] = useState( null );

  const [filter, setFilter] = useState('all'); // active, completed


  const writeItemToStorage = (updatedTodos) => {
    updateTodos(()=>updatedTodos);
    setItem(JSON.stringify(updatedTodos));
  };

  const readItemsFromStorage = async () => {

    if(todos !== null) return;

    const allRawTodos = await getItem();

    // Check against fresh storage, start with a dummy one
    if(allRawTodos === null) return writeItemToStorage(DummyTodos);

    // otherwise

    return updateTodos(()=>JSON.parse(allRawTodos) || []);
  
  }


  useEffect(()=>{
    readItemsFromStorage();
  }, []);


  const terminator = {
        id:"xx",
        task:null,
    }

  if(!loaded) return null;

  let loading = todos === null;
  let filtered = todos || [];

  if(filter === 'active') filtered = filtered.filter(t=>!t.completed);
  else if(filter === 'completed') filtered = filtered.filter(t=>t.completed);

  return (
    <View style={styles.container}>

      {/* <Header/> */}
      <Todos 
        todos={[...filtered,terminator]}

        addNew={(newTask)=>{

            let updatedTodos = [ ...todos, newTask,  ];
            // updateTodos(()=>updatedTodos);
            writeItemToStorage(updatedTodos);

        }}

        alreadyExist={(task)=> todos.find( t=>t.task.toLowerCase() === task.toLowerCase() )}

        deleteTask={(id)=>{
          let updatedTodos = todos.filter((t)=>t.id !== id);
          // updateTodos((p)=>updatedTodos)
          writeItemToStorage(updatedTodos);
        }}
        
        updateTask={(task)=> { 

            let updatedTodos = todos.map(t=>{
              if (t.id === task.id) return task;
              return t
            });

            // updateTodos(()=>[...updatedTodos]);
            writeItemToStorage(updatedTodos);

          }
        }

        filter={filter}
        changeFilter={(value)=> setFilter(()=> (Boolean(value) && ['active', 'completed' ].includes(value)) ? value : 'all')} // if nothing is given, default to all
        clearCompleted={()=>{
          let updatedTodos = todos.filter(t=>!t.completed);

          writeItemToStorage(updatedTodos);
        }}
      />
      
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
