import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:3001", // Substitua pela URL do backend
    timeout: 5000, // Tempo limite de 10 segundos para requisições
});

export default api;
