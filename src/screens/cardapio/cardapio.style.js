import { COLORS, FONT_SIZE } from "../../constants/theme"
import { Dimensions } from "react-native";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    carousel: {
        width: "100%",
        height: 150, // Altura reduzida do carrossel
    },
    carouselImage: {
        width: Dimensions.get("window").width, // Ocupa toda a largura da tela
        height: "100%", // Ajusta proporcionalmente à altura definida
    },
    header: {
        width: "100%",
        flexDirection: "row",
        padding: 10,
    },
    favorito: {
        height: 40,
        width: 40,
    },
    headerTextos: {
        flex: 1,
    },
    nome: {
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        marginBottom: 2,
    },
    location: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    locationImg: {
        width: 40,
        height: 40,
        margin: 10,
    },
    endereco: {
        flex: 1,
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray,
    },
    containerProduto: {
        padding: 10,
    },
    categoria: {
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        padding: 2,
    },
    checkInContainer: {
        marginTop: "auto", // Faz o botão ir para o final
        padding: 20, // Adiciona um pouco de espaçamento ao redor do botão
    },
};
