import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';

import TabNavigator from './src/routes.js'; // Rotas principais (abas)
import AuthNavigator from './src/routesAuth.js'; // Rotas de autenticação
import { FavoritosProvider } from './src/contexts/FavoritosContext'; // Contexto de Favoritos
import './firebaseConfig'; // Configuração do Firebase

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Verificar se o usuário está autenticado
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = await AsyncStorage.getItem('token'); // Recuperar o token
        setIsAuthenticated(!!token); // Define autenticação com base na presença do token
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
      } finally {
        setLoading(false); // Finaliza carregamento
      }
    };
    checkAuthentication();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" /> {/* Tela de carregamento */}
      </View>
    );
  }

  return (
    <FavoritosProvider>
      <NavigationContainer>
        {isAuthenticated ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </FavoritosProvider>
  );
}
