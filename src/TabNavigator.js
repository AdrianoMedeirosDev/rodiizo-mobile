// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import AbaHome from './screens/aba-home/aba-home';
import AbaFavoritos from './screens/aba-favoritos/aba-favoritos';
import Mapa from './screens/mapa/mapa'; // Importando o mapa
import AbaPerfil from './screens/aba-perfil/aba-perfil';
import icons from './constants/icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 60 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={AbaHome}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.abaHome}
              style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={AbaFavoritos}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.abafavorito}
              style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"  // Alterando nome para "Mapa"
        component={Mapa}  // Referenciando a nova tela de Mapa
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.abaPedido}  // Usando o ícone adequado
              style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={AbaPerfil}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.abaPerfil}
              style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
