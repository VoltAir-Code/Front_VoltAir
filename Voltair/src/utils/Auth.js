import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { decode, encode } from "react-native-base64";

if (!global.atob) {
    global.atob = decode;
}

if (!global.btoa) {
    global.btoa = encode;
}

// Função para decodificar o token
export const useDecodeToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) return null;

        const decoded = jwtDecode(token);

        return {
            role: decoded.role,
            name: decoded.name,
            email: decoded.email,
            id: decoded.jti,
        };
    } catch (error) {
        return null;
    }
};

// Função para codificar o token
export const userEncodeToken = async (token) => {
    try {
        const encodedToken = encode(token);
        await AsyncStorage.setItem('encodedToken', encodedToken);
        return encodedToken;
    } catch (error) {
        return null;
    }
};
