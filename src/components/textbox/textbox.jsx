import { View, Text, TextInput } from "react-native";
import { styles } from "./textbox.style.js";

function TextBox(props) {
    // Desestruturação para maior clareza e robustez
    const { label, placeholder, isPassword, onChangeText, value } = props;

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={styles.input}
                placeholder={placeholder || ""}
                secureTextEntry={isPassword || false}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
}

export default TextBox;
