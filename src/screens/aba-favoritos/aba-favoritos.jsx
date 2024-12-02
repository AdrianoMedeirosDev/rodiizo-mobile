import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { useFavoritos } from '../../contexts/FavoritosContext'; // Importar o contexto
import Restaurante from '../../components/restaurante/restaurante.jsx';
import icons from '../../constants/icons.js';
import { styles } from './aba-favoritos.style.js';

function AbaFavoritos() {
  const { favoritos } = useFavoritos(); // Usar o contexto para pegar os favoritos

  // Filtrar os restaurantes favoritos
  const restaurantesFavoritos = restaurantes.filter(restaurante => favoritos.includes(restaurante.id));

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantesFavoritos}
        keyExtractor={(restaurante) => restaurante.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Restaurante
            nome={item.nome}
            endereco={item.endereco}
            logotipo={item.logotipo}
            icone={icons.favoritoFull} // Usar o ícone de favorito cheio
          />
        )}
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Image source={icons.empty} />
            <Text style={styles.emptyText}>Nenhum favorito encontrado</Text>
          </View>
        )}
      />
    </View>
  );
}

export default AbaFavoritos;
