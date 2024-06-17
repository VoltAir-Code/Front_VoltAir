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
  const [loading, setLoading] = useState(false)

  const { height: screenHeight } = Dimensions.get('window');


  const ValidarEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.+[a-z]{2,}$/
    return regex.test(String(email).toLocaleLowerCase())
  }


  async function sendEmail() {
    if (email != null) {
      
      
      if(!ValidarEmail(email))
        {
          Alert.alert('Voltaire - Alerta', 'Insira um email válido!')
          return;
        }
        
        
        setLoading(true);
      try {
        const response = await api.post(`RecuperarSenha?email=${email}`);
        setModalVisible(true)

      } catch (error) {
        if(error.response)
          {
            Alert.alert("Voltaire - Alerta", `${error.response.data}`)
          }else{
            console.log(error.message);
          }
      }
      setLoading(false);


    } else {
      Alert.alert('Voltaire - Alerta', 'Insira um email válido!')
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
            autoCapitalize='none'
              height={"53px"}
              margin={"39px 0px 35px 0px"}
              placeholder={"digite seu e-mail"}
              value={email}
              onChangeText={(txt) => setEmail(txt)}
            />

            <ButtonDefault
              text={"Enviar um e-mail"}
              height={"58px"}
              margin={"0px 0px 0px 0px"}
              loading={loading}
              onPress={() => sendEmail()}
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
        onClose={() => { setModalVisible(false),  navigation.navigate("EmailVerify", { recoveryEmail: email }); }}
        title={"Foi enviado um e-mail para:"}
        subTitle={email}
        buttonText={"Confirmar"}
        textLink={"voltar"}
      />
    </>
  );
};
