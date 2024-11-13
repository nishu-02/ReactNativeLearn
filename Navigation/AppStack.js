import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import {Pressable, Text} from 'react-native'
const Stack = createNativeStackNavigator()

//Nesting the Navigators

export const AboutStack = () => {
  return(
    <Stack.Navigator>
        {/* <Stack.Navigator initialRouteName="About"> to change the intial display screen*/}
        <Stack.Screen name="Home" component={HomeScreen}
          // screenOptions ={{fontsize:6}} to apply to all the navigation screens the same styling
          options ={{
          title: "Welcome Home",
          headerStyle: {
            backgroundColor:"beige",
          },
          headerTintColor:"teal",
          headerTitleStyle:{ fontFamily:'serif', fontWeight:"bold"},
          headerTitleAlign:'center',
          headerRight: () => (
            <Pressable onPress={() => alert("Menu button Pressed")}>
              <Text style={{color:"teal", fontSize: 16}}>Menu</Text>
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable onPress={() => alert("Menu button Pressed")}>
              <Text style={{color:"teal", fontSize: 16}}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "lightblue", //faint shade of the header k liye
          }
        }} />        
        
        {/* Dynamic stack Navigator  */}
        <Stack.Screen name="About" component={AboutScreen} 
        //to get custom header
        initialParams={{
          name:"Guest"
        }}
        // options = {({route}) => ({
        //   title:route.params.name
        // })} 
        />      
      </Stack.Navigator>

  )
}
export default function AppS() {
  return (
    <NavigationContainer>
      <AboutStack />
    </NavigationContainer>
  );
}