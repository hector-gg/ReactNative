import { View, Text,Button,SafeAreaView } from 'react-native'
import React from 'react'

export default function SettingsScreen(props) {
// navegacion
  const {navigation} = props;
  const goToPage=(pageName)=>{
    navigation.navigate(pageName)
  }

  
  return (
    <SafeAreaView>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      {/* navegacion */}
      <Button onPress={()=>goToPage("Home")} title="Ir Home"/>
    </SafeAreaView>
  )
}