import React, { useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { ButtonDefault } from "../../components/Button/Button";
import { ContainerBlack, ContainerWhite } from "../../components/Container/Style";
import { InputVerify } from "../../components/Input/Style";
import { LogoRayOrange } from "../../components/Logo/Style";
import { SubTitle, TextLink, Title } from "../../components/Title/Style";
import { ContentVerify } from "./Style";
import api from "../../services/Service";
import { ButtonLogOut } from "../../components/Button/Style";

export const EmailVerify = ({ navigation, route }) => {
    const [codigo, setCodigo] = useState(['', '', '', '']);
    const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const { height: screenHeight } = Dimensions.get('window');

    async function SendEmail() {
        try {
            await api.post(`RecuperarSenha?email=${route.params.email}`);
        } catch (error) {
            console.log(error);
        }
    }

    function focusNextInput(index) {
        if (index < inputs.length - 1) {
            inputs[index + 1].current.focus();
        }
    }

    function focusPrevInput(index) {
        if (index > 0) {
            inputs[index - 1].current.focus();
        }
    }

    async function validarCodigo() {
        try {
            const response = await api.post(`RecuperarSenha/ValidarCodigoDeRecuperacaoSenha?email=${route.params.recoveryEmail}&code=${codigo.join('')}`);
            navigation.replace("ResetPassword", { email: route.params.recoveryEmail });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        inputs[0].current.focus();
        console.log(route.params);
    }, []);

    return (
        <ContainerBlack height={`${screenHeight}px`}>
            <LogoRayOrange
                source={require("../../../assets/Logo/LogoRay.png")} margin={"0px 0px 20px 0px"}
            />
            <ContainerWhite height={"88%"}>
                <Title color={"#313131"} margin={"65px 0px 35px 0px"}>
                    Digite o código enviado:
                </Title>
                <SubTitle color={"#313131"} margin={"0px 0px 20px 0px"}>
                    {route.params.recoveryEmail}
                </SubTitle>
                <ContentVerify margin={"20px 0px 54px 0px"}>
                    {[0, 1, 2, 3].map((index) => (
                        <InputVerify
                            key={index}
                            ref={inputs[index]}
                            keyboardType="numeric"
                            maxLength={1}
                            caretHidden={true}
                            height={"60px"}
                            margin={"0px 0px 0px 0px"}
                            placeholder={"0"}
                            onChangeText={(text) => {
                                const novoCodigo = [...codigo];
                                novoCodigo[index] = text;
                                setCodigo(novoCodigo);

                                if (text === "") {
                                    focusPrevInput(index);
                                } else {
                                    focusNextInput(index);
                                }
                            }}
                        />
                    ))}
                </ContentVerify>
                <ButtonDefault
                    text={"Resetar senha"}
                    height={"58px"}
                    margin={"0px 0px 0px 0px"}
                    onPress={() => validarCodigo()}
                />

                <ButtonLogOut margin={"20px 0px 0px 0px"}>
                    <TextLink onPress={() => SendEmail()} margin={"0px 0px 0px 0px"}>
                        Reenviar código
                    </TextLink>
                </ButtonLogOut>

                <TouchableOpacity onPress={() => navigation.replace("Login")}>
                    <TextLink margin={"30px 0px 0px 0px"}>Voltar</TextLink>
                </TouchableOpacity>

            </ContainerWhite>
        </ContainerBlack>
    );
};
