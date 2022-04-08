import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../sreens/HomeScreen";
import SettingsScreen from "../sreens/SettingsScreen";


const Stack = createStackNavigator();


export default function NavigationStack() {
    return(
        <Stack.Navigator initialRouteName='Home'>
            {/* Llamamos a la pantalla que queremos mostrar con Stack */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name='Settings' component={SettingsScreen} />
        </Stack.Navigator>
    );
}