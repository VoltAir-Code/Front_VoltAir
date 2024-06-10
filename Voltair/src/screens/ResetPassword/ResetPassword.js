import React, { useState } from "react";
import {
  ContainerBlack,
  ContainerWhite,
} from "../../components/Container/Style";
import { InputWhite } from "../../components/Input/Style";
import { SubTitle, TextLink, Title } from "../../components/Title/Style";
import { ButtonDefault } from "../../components/Button/Button";
import { LogoRayOrange } from "../../components/Logo/Style";
import { TouchableOpacity } from "react-native";
import api from "../../services/Service";

export const ResetPassword = ({ navigation , route}) => {
  const [pass, setPass] = useState("");

  const [confirmPass, setConfirmPass] = useState("");

  const { height: screenHeight } = Dimensions.get('window');

  async function UpdatePassword() {
    if (pass === confirmPass && pass.length > 4) {
        try {
          const response = await api.put(`Usuario/AlterarSenha?email=${route.params.email}`,{
            senhaNova: pass
          })
          alert("Senha alterada com sucesso")
          navigation.replace("Login", {email: route.params.email})
        } catch (error) {
          console.log(error);
          alert("Insira uma senha valida ou tente novamente mais tarde!");
        }
    } else {
      alert("Insira uma senha valida")
    }
  }
  return (
    <ContainerBlack height={`${screenHeight}px`}>
      <LogoRayOrange
        source={require("../../../assets/Logo/LogoRay.png")}
        margin={"0px 0px 20px 0px"}
      />

      <ContainerWhite height={"88%"}>
        <Title color={"#313131"} margin={"45px 0px 35px 0px"}>
          Resetar Senha:
        </Title>
        <SubTitle color={"#313131"} margin={"0px 0px 20px 0px"}>
          Digite e confirme a sua nova senha
        </SubTitle>

        <InputWhite
          height={"53px"}
          margin={"39px 0px 0px 0px"}
          placeholder={"Digite sua nova senha"}
          secureTextEntry
          value={pass}
          onChangeText={(txt) => setPass(txt)}
        />
        <InputWhite
          height={"53px"}
          margin={"39px 0px 70px 0px"}
          placeholder={"Confirme a nova senha"}
          value={confirmPass}
          onChangeText={(txt) => setConfirmPass(txt)}
          secureTextEntry
        />

        <ButtonDefault
          text={"Confirmar nova senha"}
          onPress={() => UpdatePassword()}
          height={"58px"}
          margin={"0px 0px 0px 0px"}
        />

        <TouchableOpacity onPress={() => navigation.replace("Login")}>
          <TextLink margin={"16px 0px 0px 0px"}>Voltar</TextLink>
        </TouchableOpacity>

      </ContainerWhite>
    </ContainerBlack>
  );
};
