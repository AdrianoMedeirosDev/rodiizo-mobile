// routes.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/login/login.jsx";
import Registro from "./screens/registro/registro.jsx";
import Registro2 from "./screens/registro2/registro2.jsx";
import HomeWrapper from "./TabNavigator.js"; // Importando o TabNavigator como HomeWrapper
import Cardapio from "./screens/cardapio/cardapio.jsx"; // Importando a tela Cardapio

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Registro" 
                component={Registro} 
                options={{ headerShadowVisible: false, title: "", headerBackTitle: "Voltar" }} 
            />
            <Stack.Screen 
                name="Registro2" 
                component={Registro2} 
                options={{ headerShadowVisible: false, title: "", headerBackTitle: "Voltar" }} 
            />
            <Stack.Screen 
                name="Home" 
                component={HomeWrapper} // Utilizando o TabNavigator
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Cardapio" 
                component={Cardapio} 
                options={{ title: "Cardápio" }} 
            />
        </Stack.Navigator>
    );
}

export default Routes;
