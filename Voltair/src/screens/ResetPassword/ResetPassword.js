import React from "react";
import {
  ContainerBlack,
  ContainerWhite,
} from "../../components/Container/Style";
import { InputWhite } from "../../components/Input/Style";
import { SubTitle, TextLink, Title } from "../../components/Title/Style";
import { ButtonDefault } from "../../components/Button/Button";
import { LogoRayOrange } from "../../components/Logo/Style";
import { TouchableOpacity } from "react-native";

export const ResetPassword = ({ navigation }) => {
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  async function UpdatePassword() {
    if (pass === confirmPass) {
        
    } else {
        
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

        <TouchableOpacity>
          <TextLink margin={"16px 0px 0px 0px"}>Voltar</TextLink>
        </TouchableOpacity>
      </ContainerWhite>
    </ContainerBlack>
  );
};
