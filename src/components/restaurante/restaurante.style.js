import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    restaurante: {
        flexDirection: "row", // Alinha os itens em linha
        marginBottom: 10, // Espaço inferior
        marginTop: 10, // Espaço superior
        alignItems: "center", // Alinha os itens verticalmente no centro
        paddingHorizontal: 10, // Adiciona um pequeno padding nas laterais
    },
    logotipo: {
        width: 80, // Tamanho do logotipo
        height: 80, // Tamanho do logotipo
        borderRadius: 6, // Bordas arredondadas
        marginRight: 10, // Espaço entre o logotipo e o texto
    },
    textos: {
        flex: 1, // Ocupa o restante do espaço
        padding: 8, // Espaçamento interno
    },
    nome: {
        color: COLORS.dark_gray, // Cor do nome
        marginBottom: 3, // Espaço inferior entre nome e endereço
        fontSize: FONT_SIZE.sm, // Tamanho da fonte do nome
        fontWeight: 'bold', // Tornando o nome em negrito
    },
    endereco: {
        color: COLORS.medium_gray, // Cor do endereço
        fontSize: FONT_SIZE.sm, // Tamanho da fonte do endereço
    },
    favorito: {
        width: 30,  // Tamanho do ícone de favorito
        height: 30, // Tamanho do ícone de favorito
        marginLeft: 10, // Espaço à esquerda do ícone
    }
}
