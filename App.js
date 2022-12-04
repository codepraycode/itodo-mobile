import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {assets, FONTS} from './constants';
import {useFonts} from 'expo-font';

export default function App() {


  const [loaded] = useFonts({
    JosefinBold:require('./assets/fonts/JosefinSans-Bold.ttf'),
    JosefinRegular:require('./assets/fonts/JosefinSans-Regular.ttf'),
  });


  if(!loaded) return null;


  return (
    <View style={styles.container}>

      <ImageBackground
          source={assets.heroBg}
          resize={"cover"}
          style={{
            flex:1,
              // width:'100%',
              // height:'30%',
              alignItems:'center',
              justifyContent:'center',
              
          }}
      >
        <Text style={{fontFamily:FONTS.regular}}>
          ToDi App
          <Text>Open up App.js to start working on your app!</Text>
        </Text>
        
        </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
