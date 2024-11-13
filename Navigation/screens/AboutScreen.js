import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

const AboutScreen = ({ route}) => {
    const { name } = route.params;
    const navigation = useNavigation()

    //useEffect Hook may show a noticable delay in rendering the titleM
    useLayoutEffect(() => {
        navigation.setOptions({
            title: name,
        });
    }, [navigation, name]);
  return (
    <View>
      <Text>About {name}</Text>
      <Button title='Ghar' onPress={ () => navigation.navigate("Home")}/>
      <Button title="update the name" onPress={() => navigation.setParams({
        name:"Arthur Morgan"
      })}
      />
      <Button title="go back with data"
      onPress={() => navigation.navigate("Home",{
        result: "data from about section"
      })} />
    </View> 
  )
}

export default AboutScreen

const styles = StyleSheet.create({})