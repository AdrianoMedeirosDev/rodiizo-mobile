import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { AuthProvider } from "./src/AuthContext"; // Importando o AuthProvider
import { name as appName } from "./app.json";

const Main = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

AppRegistry.registerComponent(appName, () => Main);
