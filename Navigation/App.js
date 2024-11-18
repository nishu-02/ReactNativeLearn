import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseList from "./screens/CourseList";
import ProfileScreen from "./screens/ProfileScreen";
import Setting from "./screens/Setting";
import { Ionicons } from "@expo/vector-icons";
import {AboutStack} from "./AppStack";
const Tab = createBottomTabNavigator()

export default function App() {
    
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarLabelPosition:"below-icon",
                // tabBarShowLabel:false, //--default value(True)
                tabBarActiveTintColor:"thistle",
                tabBarInactiveTintColor:'teal',
            }}>
                <Tab.Screen name="Course List" component={CourseList} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel:"MY Profile",
                    tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />
                    // tabBarBadge:1
                }} />
                <Tab.Screen name="Settings" component={Setting} />
                <Tab.Screen name="AboutStack" component={AboutStack} options ={{
                    headerShown:false,
                }}/>
            </Tab.Navigator>
        </NavigationContainer>

    )
}