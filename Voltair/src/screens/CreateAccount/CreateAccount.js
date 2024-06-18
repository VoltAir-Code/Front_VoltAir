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
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState();
    const [confirmeSenha, setConfimeSenha] = useState();
    const [spinner, setSpinner] = useState(false);
    const [loading, setLoading] = useState(false)

    const { height: screenHeight } = Dimensions.get('window');


    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.+[a-zA-Z]{2,}$/;
        return regex.test(String(email).toLowerCase());
    }
    async function Register() {
        setLoading(true)
        if (nome != '' && email != "" && senha != '' && confirmeSenha != '') {

            if (!validarEmail(email)) {
                alert("Email não segue o padrão do mercado!");
                setLoading(false);
                return;
            }

            if (senha != confirmeSenha) {
                alert("Senhas diferentes!");
                setLoading(false);
                return;
            }

            if (senha.length < 4) {
                alert("É necessário ao menos 4 caracteres na senha!")
                setLoading(false);
                return;
            }

            setLoading(true);
            try {
                const response = await api.post('Usuario', {
                    nome: nome,
                    email: email,
                    senha: senha
                })
                setModalVisible(true);
            } catch (error) {
                if (error.response) {
                    setLoading(false);
                    alert(error.response.data);
                } else {
                    setLoading(false);
                    console.log(error.message);
                }
            }
            setLoading(false);

        } else {
            setLoading(false);
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

                        <ButtonDefault
                            text={'Cadastrar'}
                            onPress={() => Register()}
                            height={"58px"}
                            margin={"50px 0px 0px 0px"}
                            loading={loading}
                        />

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