import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashbaord from './screens/Dashbaord';
import Setting from './screens/Setting';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
            <Drawer.Screen name="Dashbaord" component={Dashbaord}
            options={{
                title:'My-Dashbaord',
                drawerLabel:"Drawer Label",
                drawerActiveBackgroundColor:"beige",
                drawerActiveTintColor:"thistle",
                drawerContentStyle: {
                    backgroundColor: "#c6cbdf",
                }
            }} />

            <Drawer.Screen name="Settings" component={Setting} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}