import react from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../sreens/HomeScreen";
import SettingsScreen from "../sreens/SettingsScreen";

const Tab=createBottomTabNavigator();

export default function NavigationTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>

        </Tab.Navigator>

    )
}