// cardapio.jsx
import React, { useRef, useEffect, useState } from "react";
import { Image, TouchableOpacity, View, Text, ScrollView, Button, Dimensions } from "react-native";
import { styles } from "./cardapio.style.js";
import { restaurante } from "../../constants/dados.js";
import icons from "../../constants/icons.js";
import Produto from "../../components/produto/produto.jsx";

const carouselImages = [
    require("../../assets/restaurante1.png"),
    require("../../assets/lugar1.png"),
    require("../../assets/lugar2.png"),
    require("../../assets/lugar3.png"),
];

const { width } = Dimensions.get("window");

function Cardapio(props) {
    // Acessando o id do restaurante a partir dos parâmetros da navegação
    const { id } = props.route.params;

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);

    // Lógica para alternar as imagens automaticamente
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % carouselImages.length; // Próxima imagem
            setCurrentIndex(nextIndex);
            if (scrollRef.current) {
                scrollRef.current.scrollTo({
                    x: nextIndex * width, // Calcula a posição horizontal
                    animated: true,
                });
            }
        }, 3000); // Tempo de transição (3 segundos)
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, [currentIndex]);

    return (
        <View style={styles.container}>
            {/* Carrossel */}
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                ref={scrollRef}
                style={styles.carousel}
            >
                {carouselImages.map((image, index) => (
                    <Image
                        key={index}
                        source={image}
                        style={styles.carouselImage}
                        resizeMode="cover"
                    />
                ))}
            </ScrollView>

            <View style={styles.header}>
                <View style={styles.headerTextos}>
                    <Text style={styles.nome}>Churrascaria e Pizzaria Boizão</Text>
                </View>
                <Image source={icons.favoritoFull} style={styles.favorito} />
            </View>

            {/* Endereço */}
            <View style={styles.location}>
                <Image source={icons.location} style={styles.locationImg} />
                <Text style={styles.endereco}>
                    Avenida Professora Izoraida Marques Peres - Parque Campolim, Sorocaba
                </Text>
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Promoção do Dia */}
                <View style={styles.containerProduto}>
                    <Text style={styles.categoria}>Promoção do Dia</Text>
                    {restaurante.cardapio[0].itens.map((prod) => (
                        <Produto
                            key={prod.idProduto}
                            descricao={prod.descricao}
                            idProduto={prod.idProduto}
                            foto={prod.foto}
                            nome={prod.nome}
                            valor={prod.valor}
                        />
                    ))}
                </View>
            </ScrollView>

            {/* Botão Check-in */}
            <View style={styles.checkInContainer}>
                <Button
                    title="Fazer Check-in"
                    onPress={() => alert("Check-in realizado!")}
                    color="#FF6347"
                />
            </View>
        </View>
    );
}

export default Cardapio;
