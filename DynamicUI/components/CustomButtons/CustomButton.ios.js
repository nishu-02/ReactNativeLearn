import { Pressable, Text } from 'react-native'
import React from 'react'

const CustomButton = ({onPress , title}) => (

    <Pressable
     onPress={onPress}
     style = {{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"teal",
        borderRadius:20,
        padding:10
     }}
     >
        <Text style={{ color:"white", fontSize:18}}> {title} </Text>
     </Pressable>
);

export default CustomButton;