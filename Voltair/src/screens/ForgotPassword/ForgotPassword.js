import { useState } from "react";
import { ButtonDefault } from "../../components/Button/Button";
import { ContainerBlack, ContainerWhite, } from "../../components/Container/Style";
import { InputWhite } from "../../components/Input/Style";
import { LogoRayOrange } from "../../components/Logo/Style";
import { SubTitle, TextLink, Title } from "../../components/Title/Style";
import ModalDefault from "../../components/Modal/ModalDefault";
import { Alert, Dimensions, TouchableOpacity } from "react-native";
import api from '../../services/Service';
import { ScrollView } from "react-native";
import Raio from "../../components/icons/Raio";

export const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const { height: screenHeight } = Dimensions.get('window');

  async function sendEmail() {
    if (email != null) {

      console.log(`RecuperarSenha?email=${email}`);
      try {
        const response = await api.post(`RecuperarSenha?email=${email}`);
        navigation.navigate("EmailVerify", { recoveryEmail: email });
        alert("teste")
      } catch (error) {
        console.log(error);
      }


    } else {
      Alert.alert('Insira um email válido ou tente novamente mais tarde!')
    }
  }

  function verifyEmail() {
    if (email != '') {
      setModalVisible(true)
    }
    else {
      Alert.alert('Insira um email!')
    }
  }

  return (
    <>
      <ScrollView>
        <ContainerBlack height={`${screenHeight}px`}>


          <Raio
            color={'#F2732E'}
            size={50}
            margin={10}
          />

          {/* <LogoRayOrange
            source={require("../../../assets/Logo/LogoRay.png")}
            margin={"0px 0px 20px 0px"}
          /> */}

          <ContainerWhite height={"88%"}>
            <Title color={"#313131"} margin={"25% 0px 0px 0px"}>
              Esqueceu sua senha?
            </Title>
            <SubTitle color={"#313131"} margin={"20px 0px 20px 0px"}>
              Digite seu e-mail abaixo e enviaremos um código
            </SubTitle>

            <InputWhite
              height={"53px"}
              margin={"39px 0px 35px 0px"}
              placeholder={"digite seu e-mail"}
              value={email}
              onChangeText={(txt) => setEmail(txt)}
            />

            <ButtonDefault
              text={"Enviar e-mail"}
              height={"58px"}
              margin={"0px 0px 0px 0px"}
              onPress={() => verifyEmail()}
            />

            <TouchableOpacity onPress={() => navigation.replace("Login")}>
              <TextLink margin={"16px 0px 0px 0px"}>Voltar</TextLink>
            </TouchableOpacity>
          </ContainerWhite>
        </ContainerBlack>
      </ScrollView>

      <ModalDefault
        visible={modalVisible}
        navigation={navigation}
        height={"41.5%"}
        setModalVisible={setModalVisible}
        onClose={() => {
          setModalVisible(false);
          sendEmail();
        }} //Falta colocar o navigation.replace
        title={"Foi enviado um e-mail para:"}
        subTitle={email}
        buttonText={"Confirmar"}
        textLink={"voltar"}
      />
    </>
  );
};
