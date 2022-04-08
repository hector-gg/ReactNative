import react from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "../sreens/HomeScreen";
import SettingsScreen from "../sreens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
        </Drawer.Navigator>
    )
}

