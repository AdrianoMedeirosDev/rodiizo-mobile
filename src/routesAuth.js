import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login/login';
import Registro from './screens/registro/registro';
import Registro2 from './screens/registro2/registro2';
import HomeWrapper from "./TabNavigator.js"; // Importando o TabNavigator como HomeWrapper


const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Home" 
        component={HomeWrapper} // Utilizando o TabNavigator
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="Registro"
        component={Registro}
        options={{
          headerShadowVisible: false,
          title: '',
          headerBackTitle: 'Voltar',
        }}
      />
      <Stack.Screen
        name="Registro2"
        component={Registro2}
        options={{
          headerShadowVisible: false,
          title: '',
          headerBackTitle: 'Voltar',
        }}
      />
    </Stack.Navigator>
  );
}
