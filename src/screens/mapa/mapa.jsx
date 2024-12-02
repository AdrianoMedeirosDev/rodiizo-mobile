import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

// Exemplo de dados de restaurantes (substitua com os dados reais)
const restaurantes = [
  { id: 1, name: 'Restaurante A', latitude: -23.55052, longitude: -46.633308 },
  { id: 2, name: 'Restaurante B', latitude: -23.55152, longitude: -46.634308 },
  { id: 3, name: 'Restaurante C', latitude: -23.55252, longitude: -46.635308 },
];

const Mapa = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true); // Adiciona o estado de carregamento

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de localização negada');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLoading(false);
    };

    getLocation();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={
          location
            ? {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
            : {
                latitude: -23.55052,
                longitude: -46.633308,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
        }
      >
        {restaurantes.map((restaurante) => (
          <Marker
            key={restaurante.id}
            coordinate={{
              latitude: restaurante.latitude,
              longitude: restaurante.longitude,
            }}
            title={restaurante.name}
            description={`Localizado em ${restaurante.latitude}, ${restaurante.longitude}`}
          />
        ))}

        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Você está aqui"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Mapa;
