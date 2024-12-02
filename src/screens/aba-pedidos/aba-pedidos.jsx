import { FlatList, View } from "react-native";
import { pedidos } from "../../constants/dados.js";
import { styles } from "./aba-pedidos.style.js";
import Pedido from "../../components/pedido/pedido.jsx";

function AbaPedidos(props) {
    function DetalhePedido() {
        props.navigation.navigate("detalhe-pedido");
    }

    // Limitar a lista a dois itens
    const pedidosFiltrados = pedidos.slice(0, 2);

    return (
        <View style={styles.container}>
            <FlatList
                data={pedidosFiltrados}
                keyExtractor={(ped) => ped.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <Pedido
                            logotipo={item.logotipo}
                            nome={item.nome}
                            valor={item.vl_total}
                            dt_pedido={item.dt_pedido}
                            status={item.status}
                            onClickPedido={DetalhePedido}
                        />
                    );
                }}
            />
        </View>
    );
}

export default AbaPedidos;
