import { View, Text, StyleSheet, TextInput, Button, Image
    ,KeyboardAvoidingView, Platform
 } from 'react-native'
import React, { useState } from 'react'

export default function LoginForm() {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    return (
     <KeyboardAvoidingView 
     behavior='padding'
     keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
     style = {styles.container}>
        <View style = {styles.forms}>
            <Image source = {require("./assets/adaptive-icon.png")} style = {styles.image}/>
            <Text style={styles.label}>Username</Text>
            <TextInput style = {styles.input} placeholder='Enter your unique usernmae'
            value={username} onChangeText={setUsername}/>
            <Text style = {styles.label}>Password</Text>
            <TextInput style = {styles.input} placeholder='Enter your password...' 
            value={password} onChangeText={setPassword}
            secureTextEntry
            keyboardType="default" />

            <Button title = "Get Inside" onPress={ () =>{} } />
        </View>
     </KeyboardAvoidingView>
  ); 
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'beige',
        paddingHorizontal:16,
    },
    forms: {
        backgroundColor:"white",
        padding:20,
        borderRadius:12,
        shadowColor:"teal",
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.23,
        shadowRadius:4,
        elevation:5,

    },
    label:{
        fontSize:16,
        marginBottom:12,
        fontFamily:'serif',
        fontWeight:'semibold',
        color:'teal',
    },
    input: {
        height:40,
        borderColor:'thistle',
        borderWidth:2,
        marginBottom:10,
        padding:10,
        borderRadius:6,

    },
    image:{
        height:400,
        width:200,
        alignSelf:'center',
        marginBottom:10,
    }
})