import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./registro.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Registro(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");
  const auth = getAuth();

  const handleRegister = async () => {
    if (senha1 !== senha2) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha1);
      alert("Cadastro bem-sucedido!");
      props.navigation.navigate("Login");
    } catch (error) {
      alert("Erro ao criar a conta: " + error.message);
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header texto="Criar sua conta." />

        <View style={styles.formGroup}>
          <TextBox label="Nome completo" onChangeText={(texto) => setNome(texto)} value={nome} />
        </View>

        <View style={styles.formGroup}>
          <TextBox label="E-mail" onChangeText={(texto) => setEmail(texto)} value={email} />
        </View>

        <View style={styles.formGroup}>
          <TextBox
            label="Senha"
            isPassword={true}
            onChangeText={(texto) => setSenha1(texto)}
            value={senha1}
          />
        </View>

        <View style={styles.formGroup}>
          <TextBox
            label="Confirmar senha"
            isPassword={true}
            onChangeText={(texto) => setSenha2(texto)}
            value={senha2}
          />
        </View>

        <Button texto="Criar conta" onPress={handleRegister} />
      </ScrollView>
    </View>
  );
}

export default Registro;
