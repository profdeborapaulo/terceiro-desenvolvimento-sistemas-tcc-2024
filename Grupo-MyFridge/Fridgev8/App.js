// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DateTimePicker from '@react-native-community/datetimepicker';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen'; 
import InitialScreen from './screens/InitialScreen';
import Lista from './screens/Listacomprasscreen';
import ConfigScreen from './screens/ConfigScreen';
import Receitas from './screens/Receitas';
import FreezerScreen from './screens/Freezer';
import FridgeScreen from './screens/Geladeira';
import Screen01 from './screens/Screen01';
import Alimentos from './screens/Alimentosscreen';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Initial' screenOptions={{headerShown: false}}>
        <Stack.Screen name="ConfigScreen" component={ConfigScreen} />
        <Stack.Screen name="Receitas" component={Receitas} />
        <Stack.Screen name="FreezerScreen" component={FreezerScreen} />
        <Stack.Screen name="FridgeScreen" component={FridgeScreen} />
        <Stack.Screen name="Lista" component={Lista} />
        <Stack.Screen name="Alimentos" component={Alimentos} />
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Tela01" component={Screen01} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;