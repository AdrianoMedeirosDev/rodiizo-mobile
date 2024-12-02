import { Image, Text, View } from "react-native";
import { styles } from "./header.style.js";
import icons from "../../constants/icons.js";

function Header(props) {
    return (
        <View style={styles.header}>
            {icons.logo ? ( // Garante que a imagem só será renderizada se `icons.logo` estiver definido
                <Image style={styles.logo} source={icons.logo} />
            ) : (
                <Text style={styles.errorText}>Logo não encontrada</Text> // Texto opcional caso o logo esteja ausente
            )}
            <Text style={styles.titulo}>{props.texto || "Título Padrão"}</Text> {/* Define um título padrão */}
        </View>
    );
}

export default Header;
