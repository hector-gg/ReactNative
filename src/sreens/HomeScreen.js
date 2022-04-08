import { View, Text,Button,SafeAreaView } from 'react-native';
import React from 'react';

export default function HomeScreen(props) {
  //Para poder navegar entre paginas
  const {navigation}=props;

  const goToSettings=()=>{
    navigation.navigate("Settings")
  }

  return (
    <SafeAreaView>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      {/* Agregamos un button paar ir a settings */}
      <Button onPress={goToSettings} title="Ir Ajustes"/>

    </SafeAreaView>
  );
}