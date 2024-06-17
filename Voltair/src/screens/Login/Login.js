import React, { useEffect, useState } from 'react';
import { ContainerBlack, ContainerHome, ContainerWhite } from "../../components/Container/Style";
import { InputWhite } from "../../components/Input/Style";
import { SubTitle, TextLink, Title } from "../../components/Title/Style";
import { ButtonDefault } from "../../components/Button/Button";
import { LogoRayOrange } from '../../components/Logo/Style';
import { Alert, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import api from '../../services/Service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { token } from 'stylis';
import Raio from '../../components/icons/Raio';
import { StyleSheet } from 'react-native';


export const Login = ({ navigation }) => {
    const [email, setEmail] = useState(email);
    const [password, setPassword] = useState(password);
    const { height: screenHeight } = Dimensions.get('window');
    const [loading, setLoading] = useState();



    // Função de login
    async function Login() {
        setLoading(true);
        try {
            // Chamando a AP
  
            const response = await api.post('Login', {
                email: 'richardfpassarelli@gmail.com',
                password: 'teste123'
            });

            console.log(response.data);
            

            if (response.status === 200) {
                await AsyncStorage.setItem('token', response.data.token);

                navigation.replace("Main");
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            Alert.alert('Falha no Login!', 'Verifique seus dados e aguarde um momento.');
        }
    }




    return (
        <ScrollView style={{ flex: 1 }}>

            <ContainerBlack height={`${screenHeight}px`}
            >


                <Raio
                    color={'#F2732E'}
                    size={50}
                    margin={10}
                />

                {/* <LogoRayOrange
                    source={require("../../../assets/Logo/LogoRay.png")}
                    margin={"15px 0px 5px 0px"}
                /> */}

                <ContainerWhite height={"91.41%"}>
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
                        autoCapitalize="none"
                        onChangeText={(txt) => setEmail(txt)}
                        value={email}
                    />

                    <InputWhite
                        height={"53px"}
                        margin={"39px 0px 0px 0px"}
                        autoCapitalize="none"
                        placeholder={"Digite sua senha"}
                        secureTextEntry
                        onChangeText={(txt) => setPassword(txt)}
                        value={password}
                    />

                    <TouchableOpacity
                        onPress={() => navigation.navigate("ForgotPassword")}
                    >

                        <TextLink margin={"16px 0px 138px 0px"}>
                            Esqueceu sua senha?
                        </TextLink>

                    </TouchableOpacity>

                    <ButtonDefault
                       text={"Entrar"}
                       height={"58px"}
                       margin={"0px 0px 0px 0px"}
                       onPress={Login}
                       loading={loading}
                    />

                    <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                        <TextLink margin={"19px 0px 30px 0px"}>
                            Criar uma conta
                        </TextLink>
                    </TouchableOpacity>

                </ContainerWhite>

            </ContainerBlack>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    ButtonModal: {
        borderColor: '#F2732E',
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    TextModal: {
        color: 'white'
    },
});