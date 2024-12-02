import React, { useState } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './aba-home.style.js';
import icons from '../../constants/icons.js';
import TextBox from '../../components/textbox/textbox.jsx';
import Categorias from '../../components/categorias/categorias.jsx';
import { categorias, banners, restaurantes } from '../../constants/dados.js';
import Banners from '../../components/banners/banners.jsx';
import Restaurante from '../../components/restaurante/restaurante.jsx';
import { useFavoritos } from '../../contexts/FavoritosContext'; // Importar o contexto

function AbaHome(props) {
  const [busca, setBusca] = useState(''); 
  const { favoritos, toggleFavorito } = useFavoritos(); // Usar o contexto para pegar favoritos e a função toggleFavorito

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho com logo e carrinho */}
      <View style={styles.headerBar}>
        <Image source={icons.logo} style={styles.logo} />
        <TouchableOpacity onPress={() => props.navigation.navigate('checkout')}>
          <Image source={icons.cart} style={styles.cart} />
        </TouchableOpacity>
      </View>

      {/* Caixa de busca */}
      <View style={styles.busca}>
        <TextBox
          placeholder="Quais são as novidades para hoje?"
          onChangeText={(texto) => setBusca(texto)}
          value={busca}
        />
      </View>

      {/* Lista de categorias, banners e restaurantes */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categorias dados={categorias} />
        <Banners dados={banners} />

        {restaurantes && restaurantes.length > 0 ? (
          restaurantes.map((restaurante, index) => (
            <View key={index}>
              <Restaurante
                logotipo={restaurante.logotipo}
                nome={restaurante.nome}
                endereco={restaurante.endereco}
                // Ícone muda dependendo se o restaurante está nos favoritos
                icone={
                  favoritos.includes(restaurante.id)
                    ? icons.favoritoFull // Coração cheio
                    : icons.favoritoEmpty // Coração vazio
                }
                // Função para alternar favoritos
                onPressFavorito={() => toggleFavorito(restaurante.id)}
                // Navegação para a página de cardápio
                onPress={() => props.navigation.navigate('Cardapio', { id: restaurante.id })}
              />
            </View>
          ))
        ) : (
          <Text style={styles.textoErro}>Nenhum restaurante encontrado.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default AbaHome;
