import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
// import Saludar from "./src/components/Saludar";
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {
  
  return (
    <NavigationContainer>
    {/* <View style={styles.container}>
      <Text>Curso React Native</Text>
      <Saludar />
      <Saludar firstname="Carlos"  lastname="Galvan Gutierrez" />
    </View> */}
    {/* <NavigationStack/>  */}
    {/* <NavigationTab/> */}
    <NavigationDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
