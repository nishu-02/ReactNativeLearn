import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { useState } from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';
import { SafeAreaView } from 'react-native';
import LoginForm from './LoginForm';

export default function App() {
  const[name, setName] = useState("")
  const[isDarkMode , setIsDarkMode] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      {/* <TextInput style={styles.input} value={name} onChangeText={setName}
      placeholder='example.com'
      // secureTextEntry for hiding the info
      // keyboardType='numeric' // for opening keybaord according to the input
      autoCapitalize="none"
      autoCorrect={false}
      />
      <TextInput style={[styles.input,styles.multiline_text]} placeholder='message'
      multiline  />
      <Text style = {styles.text}>My name is {name}</Text>

      {/* implementing the switch component */}
      {/* <View style={styles.switchContainer}>
         <Text style={styles.text}>Dark Mode</Text>
         <Switch value={isDarkMode}
         onValueChange={() => setIsDarkMode((previousState) => !previousState)}
         trackColor={{false: "thistle", true:"teal"}}
         thumbColor="midnightblue"/>
      </View> */}
      <LoginForm/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height:50,
    width:250,
    padding:10,
    borderColor: 'gray',
    borderWidth:1,
  },
  text: {
    fontSize:24,
    color:'black',
  },
  multiline_text:{
    minHeight:100,
    textAlignVertical:'top',
  },
  switchContainer:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:10,
  },
});
