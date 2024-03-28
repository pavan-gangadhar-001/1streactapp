import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  let x = "Hi from x";
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress= {()=>console.log("yayy i pressed")} style= {styles.textdesign}>Hello waaorld </Text>
      <Image blurRadius = {10}source = {require('./assets/icon.png')}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textdesign: {
    
    color: Colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
