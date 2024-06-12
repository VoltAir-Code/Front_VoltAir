import { ActivityIndicator, Alert, Dimensions, TouchableOpacity } from "react-native"
import { ButtonDefault } from "../../components/Button/Button"
import { ContainerBlack, ContainerWhite } from "../../components/Container/Style"
import { InputWhite } from "../../components/Input/Style"
import { LogoRayOrange } from "../../components/Logo/Style"
import ModalDefault from "../../components/Modal/ModalDefault"
import { SubTitle, TextLink, Title } from "../../components/Title/Style"
import { useState } from "react"
import api from "../../services/Service"
import { err } from "react-native-svg"
import { ScrollView } from "react-native"
import { Button, TextButton } from "../../components/Button/Style"
import Raio from "../../components/icons/Raio"


export const CreateAccount = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [nome, setNome] = useState();
    const [email, setEmail] = useState("richardfpassarelli@gmail.com");
    const [senha, setSenha] = useState();
    const [confirmeSenha, setConfimeSenha] = useState();
    const [spinner, setSpinner] = useState(false);

    const { height: screenHeight } = Dimensions.get('window');


    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.+[a-zA-Z]{2,}$/;
        return regex.test(String(email).toLowerCase());
    }
    async function Register() {
        if (nome != null && email != null && senha != null && confirmeSenha != null) {

            if (!validarEmail(email)) {
                alert("Email não segue o padrão do mercado!");
                return;
            }

            if (senha != confirmeSenha) {
                alert("Senhas diferentas!");
                return;
            }

            if (senha.length < 4) {
                alert("É necessário ao menos 4 caracteres na senha!")
                return;
            }

            setSpinner(true);
            try {
                const response = await api.post('Usuario', {
                    nome: nome,
                    email: email,
                    senha: senha
                })
                setModalVisible(true);
            } catch (error) {
                if (error.response) {
                    alert(error.response.data);
                } else {
                    console.log(error.message);
                }
            }
            setSpinner(false);

        } else {
            alert("Preencha todos os campos!")
        }

    }


    return (
        <>
            <ScrollView style={{ flex: 1 }}>
                <ContainerBlack height={`${screenHeight}px`}>

                    <Raio
                        color={'#F2732E'}
                        size={50}
                        margin={10}
                    />

                    {/* <LogoRayOrange margin={"10px 0px 5px 0px"} source={require("../../../assets/Logo/LogoRay.png")} /> */}

                    <ContainerWhite height={"91.41%"}>
                        <Title color={"#313131"} margin={"45px 0px 35px 0px"}>
                            Criar conta
                        </Title>

                        <SubTitle color={"#313131"} margin={"0px 0px 0px 0px"}>
                            Seja bem-vindo(a)!
                        </SubTitle>
                        <SubTitle color={"#313131"} margin={"0px 0px 20px 0px"}>
                            Inscreva-se em segundos.
                        </SubTitle>


                        <InputWhite autoCapitalize="none" value={nome} onChangeText={setNome} height={"53px"} margin={"39px 0px 0px 0px"} placeholder={"digite seu nome"} />
                        <InputWhite autoCapitalize="none" value={email} onChangeText={setEmail} height={"53px"} margin={"39px 0px 0px 0px"} placeholder={"digite seu e-mail"} />
                        <InputWhite secureTextEntry={true} autoCapitalize="none" value={senha} onChangeText={setSenha} height={"53px"} margin={"39px 0px 0px 0px"} placeholder={"digite sua senha"} />
                        <InputWhite secureTextEntry={true} autoCapitalize="none" value={confirmeSenha} onChangeText={setConfimeSenha} height={"53px"} margin={"39px 0px 0px 0px"} placeholder={"confirme sua senha"} />

                        <Button
                            onPress={() => Register()}
                            height={"58px"}
                            margin={"50px 0px 0px 0px"}
                        >
                            {spinner ?
                                <ActivityIndicator size="large" color="#AAA" />
                                : <TextButton>{`Cadastrar`}</TextButton>}
                        </Button>




                        <TouchableOpacity
                            onPress={() => navigation.replace("Login")}>

                            <TextLink margin={"15px 0px 0px 0px"}>Cancelar</TextLink>
                        </TouchableOpacity>

                    </ContainerWhite>

                </ContainerBlack>
            </ScrollView>

            <ModalDefault
                visible={modalVisible}
                height={'41.5%'}
                navigation={navigation}
                onClose={() => { setModalVisible(false), navigation.navigate("Login") }}
                setModalVisible={setModalVisible}
                title={"Conta criada com sucesso!"}
                subTitle={"Sua conta foi criada. Aproveite ao máximo todos os benefícios que oferecemos."}
                buttonText={"Ir para Login"}
            />
        </>
    )
}