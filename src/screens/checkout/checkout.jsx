import { FlatList, View, Text } from "react-native";
import { styles } from "./checkout.style.js";
import { pedido } from "../../constants/dados.js";
import Produto from "../../components/produto/produto.jsx";
import Button from "../../components/button/button.jsx";

function Checkout(props) {
    return (
        <View style={styles.container}>
            {/* Conteúdo Principal */}
            <FlatList
                data={pedido}
                renderItem={({ item }) => <Produto item={item} />}
                keyExtractor={(item) => item.id.toString()}
                style={{ flex: 1 }}
            />

            {/* Rodapé com Resumo e Botão */}
            <View style={styles.footer}>
                <View style={styles.valoresContainer}>
                    <View style={styles.valores}>
                        <Text style={styles.total}>Resumo dos Valores</Text>
                    </View>

                    <View style={styles.valores}>
                        <Text style={styles.valor}>Subtotal</Text>
                        <Text style={styles.valor}>R$ 00,00</Text>
                    </View>

                   

                    <View style={styles.valores}>
                        <Text style={styles.total}>Total</Text>
                        <Text style={styles.total}>R$ 00,00</Text>
                    </View>
                </View>

                <Button texto="Finalizar Pedido" />
            </View>
        </View>
    );
}

export default Checkout;
