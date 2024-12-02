import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Importando Firebase Auth
import AsyncStorage from '@react-native-async-storage/async-storage'; // Corrigir a importação de AsyncStorage

function Login(props) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [token, setToken] = useState(null);

    const auth = getAuth(); // Obter a instância de autenticação

    // Verificar o token na inicialização
    useEffect(() => {
        const verificarToken = async () => {
            try {
                const storedToken = await AsyncStorage.getItem("token");
                if (storedToken) {
                    setToken(storedToken);
                    props.navigation.navigate("Home"); // Navegar para "Home"
                }
            } catch (error) {
                console.error("Erro ao verificar o token:", error);
            }
        };

        verificarToken();
    }, [props.navigation]);

    // Função de processamento de login via Firebase Authentication
    async function ProcessarLogin() {
        if (!email || !senha) {
            setMensagem("Por favor, preencha todos os campos.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMensagem("Por favor, insira um e-mail válido.");
            return;
        }

        try {
            // Usando o Firebase Authentication para realizar o login
            await signInWithEmailAndPassword(auth, email, senha);
            setMensagem("Login bem-sucedido!");
            const userToken = await auth.currentUser.getIdToken();
            await AsyncStorage.setItem("token", userToken); // Armazena o token após o login
            props.navigation.navigate("Home"); // Navegar para "Home"
        } catch (error) {
            setMensagem("Usuário ou senha inválidos.");
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <Header texto="Login" />

            <View style={styles.formGroup}>
                <View style={styles.form}>
                    <TextBox label="E-mail" onChangeText={(texto) => setEmail(texto)} value={email} />
                </View>

                <View style={styles.form}>
                    <TextBox label="Senha" isPassword={true} onChangeText={(texto) => setSenha(texto)} value={senha} />
                </View>

                <View style={styles.form}>
                    <Button texto="Acessar" onPress={ProcessarLogin} />
                </View>

                {mensagem && (
                    <Text style={{ color: mensagem === "Login bem-sucedido!" ? "green" : "red", marginTop: 10 }}>
                        {mensagem}
                    </Text>
                )}
            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Registro")}>
                    <Text style={styles.footerText}>Criar minha conta.</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;
