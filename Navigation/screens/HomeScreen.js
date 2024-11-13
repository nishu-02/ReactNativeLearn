import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = ({ route }) => {
    const navigation = useNavigation()
  return (
    <View >
      <Text>HomeScreen</Text>
      <Text>{route.params?.result}</Text>
      <Button title='About Section' 
      onPress={() => navigation.navigate("About",{
        name:"Nishant",}
      )} />
    </View>
  )
}

export default HomeScreen