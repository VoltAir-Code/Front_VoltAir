import React, { useEffect, useState } from 'react';
import { ContainerBlack, ContainerWhite } from "../../components/Container/Style";
import { InputWhite } from "../../components/Input/Style";
import { SubTitle, TextLink, Title } from "../../components/Title/Style";
import { ButtonDefault } from "../../components/Button/Button";
import { LogoRayOrange } from '../../components/Logo/Style';
import { Alert, TouchableOpacity } from 'react-native';
import api from '../../services/Service';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Função de login
    async function Login() {
        try {
            // Chamando a API
console.log(email);
console.log(password);
        
            const response = await api.post('Login', {
                email: email,
                password: password,
            });

            console.log(response);
         

            if (response.status === 200) {
                await AsyncStorage.setItem('token', response.data.token);

                navigation.navigate("Home");
            }
        } catch (error) {
            console.log(error); // Log do erro para depuração
            Alert.alert('Falha no Login!', 'Verifique seus dados e aguarde um momento.');
        }
    }

    return (
        <ContainerBlack>
            <LogoRayOrange
                source={require("../../../assets/Logo/LogoRay.png")}
                margin={"0px 0px 20px 0px"}
            />

            <ContainerWhite height={"88%"}>
                <Title color={"#313131"} margin={"45px 0px 35px 0px"}>
                    Login
                </Title>
                <SubTitle color={"#313131"} margin={"0px 0px 20px 0px"}>
                    Bem vindo ao Voltair®
                </SubTitle>

                <InputWhite 
                    height={"53px"} 
                    margin={"39px 0px 0px 0px"} 
                    placeholder={"Digite seu e-mail"} 
                    onChangeText={(txt) => setEmail(txt)}
                    value={email}
                />

                <InputWhite 
                    height={"53px"} 
                    margin={"39px 0px 0px 0px"} 
                    placeholder={"Digite sua senha"} 
                    secureTextEntry
                    onChangeText={(txt) => setPassword(txt)}
                    value={password}
                />

                <TextLink margin={"16px 0px 138px 0px"}>
                    Esqueceu sua senha?
                </TextLink>
                <ButtonDefault
                    text={"Entrar"}
                    height={"58px"}
                    margin={"0px 0px 0px 0px"}
                    onPress={() => Login()}
                />

                <TouchableOpacity>
                    <TextLink margin={"16px 0px 0px 0px"}>
                        Criar uma conta
                    </TextLink>
                </TouchableOpacity>
            </ContainerWhite>
        </ContainerBlack>
    );
};
