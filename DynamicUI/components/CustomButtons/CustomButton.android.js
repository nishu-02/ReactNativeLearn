import { Pressable, Text } from 'react-native'
import React from 'react'

const CustomButton = ({onPress , title}) => (

    <Pressable
     onPress={onPress}
     style = {{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"thistle",
        borderRadius:5,
        padding:10
     }}
     >
        <Text style={{ color:"teal", fontSize:18}}> {title} </Text>
     </Pressable>
);

export default CustomButton;