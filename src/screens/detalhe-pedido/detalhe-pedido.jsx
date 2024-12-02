import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const DetalhePedido = () => {
    const [avaliacao, setAvaliacao] = useState(0); // Estado para armazenar a avaliação

    const selecionarEstrela = (index) => {
        setAvaliacao(index + 1); // Define a avaliação com base no índice clicado
    };

    return (
        <View style={styles.container}>
            {/* Título do Pedido */}
            <Text style={styles.pedidoTitulo}>pedido 4066799</Text>
            
            {/* Horário de retirada */}
            <Text style={styles.horario}>
                horário de entrada {"\n"}
                <Text style={styles.horarioDetalhes}>21:00 - 22:00</Text>
            </Text>

            {/* Status do Pedido */}
            <Text style={styles.status}>reserva concluída</Text>

            {/* Avaliação */}
            <View style={styles.avaliacaoContainer}>
                {Array(5)
                    .fill()
                    .map((_, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => selecionarEstrela(index)}
                        >
                            <Text style={styles.estrela}>
                                {index < avaliacao ? "⭐" : "☆"}
                            </Text>
                        </TouchableOpacity>
                    ))}
            </View>

            {/* Detalhes do Pedido */}
            <Text style={styles.detalhesTitulo}>detalhes do pedido 4066799</Text>
            <Text style={styles.detalhesDescricao}>
                Realizado às 17:28 - 10/05/2024{"\n"}
                1x Restaurante - MISTA{"\n"}
                Refeições para consumo imediato (pratos quentes do buffet)
            </Text>

            {/* Total */}
            <Text style={styles.total}>total: R$ 22,99</Text>

            {/* Informações do Restaurante */}
            <View style={styles.restaurante}>
                <Text style={styles.restauranteNome}>CHURRASCARIA E PIZZARIA BOIZÃO</Text>
                <Text style={styles.restauranteEndereco}>
                    Avenida Professora Izoraida Marques Peres, 401 - Parque Campolim, Sorocaba - SP
                </Text>
            </View>

            {/* Botão de Suporte */}
            <TouchableOpacity style={styles.suporte}>
                <Text style={styles.suporteTexto}>Problemas com seu pedido? Entre em contato com o suporte</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    pedidoTitulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FF7F00",
        textAlign: "center",
    },
    horario: {
        marginTop: 10,
        fontSize: 16,
        color: "#000",
        textAlign: "center",
    },
    horarioDetalhes: {
        fontWeight: "bold",
    },
    status: {
        color: "red",
        textAlign: "center",
        marginVertical: 10,
        fontSize: 16,
    },
    avaliacaoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10,
    },
    estrela: {
        fontSize: 30,
        marginHorizontal: 5,
    },
    detalhesTitulo: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 20,
    },
    detalhesDescricao: {
        fontSize: 14,
        color: "#555",
        marginVertical: 10,
    },
    total: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "right",
        marginTop: 10,
    },
    restaurante: {
        marginTop: 20,
    },
    restauranteNome: {
        fontWeight: "bold",
        fontSize: 16,
    },
    restauranteEndereco: {
        fontSize: 14,
        color: "#555",
        marginTop: 5,
    },
    suporte: {
        backgroundColor: "#4CAF50",
        borderRadius: 8,
        padding: 15,
        marginTop: 20,
    },
    suporteTexto: {
        color: "#fff",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default DetalhePedido;
