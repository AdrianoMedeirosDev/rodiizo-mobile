import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Certifique-se de instalar esse pacote
import { styles } from "./aba-perfil.style.js";
import icons from "../../constants/icons.js";
import { useNavigation } from "@react-navigation/native"; // Se você estiver usando react-navigation

function AbaPerfil() {
    const [isAuthenticated, setIsAuthenticated] = useState(true); // Para controlar a autenticação (se já está logado ou não)
    const navigation = useNavigation(); // Para navegar para outra tela após o logout

    // Função de logout
    const logout = async () => {
        await AsyncStorage.removeItem('token'); // Remove o token armazenado
        setIsAuthenticated(false); // Atualiza o estado de autenticação
        navigation.navigate("./screens/login/login"); // Navega para a tela de login ou qualquer outra tela
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.item, styles.borderTop]}>
                <View style={styles.containerIcone}>
                    <Image source={icons.endereco} style={styles.icone} />
                </View>

                <View style={styles.textos}>
                    <Text style={styles.titulo}>Endereço</Text>
                    <Text style={styles.subtitulo}>Meu endereço de entrega</Text>
                </View>

                <View style={styles.containerIcone}>
                    <Image source={icons.more} style={styles.more} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <View style={styles.containerIcone}>
                    <Image source={icons.dados} style={styles.icone} />
                </View>

                <View style={styles.textos}>
                    <Text style={styles.titulo}>Meus Dados</Text>
                    <Text style={styles.subtitulo}>Informações da minha conta</Text>
                </View>

                <View style={styles.containerIcone}>
                    <Image source={icons.more} style={styles.more} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.item} 
                onPress={logout} // Adiciona o evento de logout ao botão de desconectar
            >
                <View style={styles.containerIcone}>
                    <Image source={icons.logout} style={styles.icone} />
                </View>

                <View style={styles.textos}>
                    <Text style={styles.titulo}>Desconectar</Text>
                    <Text style={styles.subtitulo}>Desconectar seu usuário desse aparelho</Text>
                </View>

                <View style={styles.containerIcone}>
                    <Image source={icons.more} style={styles.more} />
                </View>
            </TouchableOpacity>

        </View>
    );
}

export default AbaPerfil;
