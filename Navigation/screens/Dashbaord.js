import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Dashbaord = ({ navigation }) => {
  return (
    <View>
      <Text>Dashbaord</Text>
      <Button title="toggle Drawer" onPress={() => navigation.toggleDrawer() }/>
        {/* implementing  the jump to method */}
      <Button title="Settings" onPress={() => navigation.jumpTo("Settings") }/>
    </View>
  )
}

export default Dashbaord

const styles = StyleSheet.create({})