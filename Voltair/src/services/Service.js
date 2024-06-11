import axios from "axios";

// Porta da API
const portaApi = '7152';

// IP da máquina
const ip = '192.168.15.169';


// Base da URL de acesso da API
const apiUrlLocal = `http://172.16.39.73:7152/api/`;

// Configurar axios
const api = axios.create({
    baseURL: apiUrlLocal,
    timeout: 1000,
});

export default api;
