import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = StyleSheet.create({
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
