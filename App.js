import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';


// import Header from './components/Header';
import Todos from './components/Todos';

import {COLORS} from './constants';

export default function App() {


  const [loaded] = useFonts({
    JosefinBold:require('./assets/fonts/JosefinSans-Bold.ttf'),
    JosefinRegular:require('./assets/fonts/JosefinSans-Regular.ttf'),
  });


  if(!loaded) return null;


  return (
    <SafeAreaView style={styles.container}>

      {/* <Header/> */}
      <Todos/>
      {/* <Footer/> */}
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    padding:0,
    backgroundColor: COLORS.lightMode.veryLightGray,
    // justifyContent:'center',
    alignItems:'center',
  },
});
