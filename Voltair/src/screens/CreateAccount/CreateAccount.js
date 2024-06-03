import { TouchableOpacity } from "react-native"
import { ButtonDefault } from "../../components/Button/Button"
import { ContainerBlack, ContainerWhite } from "../../components/Container/Style"
import { InputWhite } from "../../components/Input/Style"
import { LogoRayOrange } from "../../components/Logo/Style"
import ModalDefault from "../../components/Modal/ModalDefault"
import { TextLink } from "../../components/Title/Style"
import { useState } from "react"
import api from "../../services/Service"
import { err } from "react-native-svg"

export const CreateAccount = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
const[nome, setNome] = useState();
const[email,setEmail] = useState();
const[senha, setSenha] = useState();
const[confirmeSenha, setConfimeSenha] = useState();
    async function Register(){
if(senha != null && confirmeSenha == senha && senha.length > 3)
{

    try {

        const response = await api.post('Usuario', {
            nome: nome,
            email: email,
            senha: senha,
        
          }) 
          setModalVisible(true);  
    } catch (error) {
        console.log(error);
    }





}else{
    alert("Senha inválida")
}
    }
    return (
        <>
            <ContainerBlack>
                <LogoRayOrange margin={"0px 0px 4px 0px"} source={require("../../../assets/Logo/LogoRay.png")}/>
                <ContainerWhite height={"91.41%"}>
                    <InputWhite value={nome} onChangeText={setNome} height={"53px"} margin={"39px 0px 0px 0px"} placeholder={"digite seu nome"} />
                    <InputWhite value={email} onChangeText={setEmail} height={"53px"} margin={"39px 0px 0px 0px"} placeholder={"digite seu e-mail"} />
                    <InputWhite value={senha} onChangeText={setSenha} height={"53px"} margin={"39px 0px 0px 0px"} placeholder={"digite sua senha"} />
                    <InputWhite value={confirmeSenha} onChangeText={setConfimeSenha} height={"53px"} margin={"39px 0px 108px 0px"} placeholder={"confirme sua senha"} />
                    <ButtonDefault
                        text={"Cadastrar"}
                        height={"58px"}
                        margin={"0px 0px 0px 0px"}
                        onPress={() => Register()}
                    />

                    <TouchableOpacity>

                    <TextLink margin={"19px 0px 0px 0px"}>Cancelar</TextLink>
                    </TouchableOpacity>

                </ContainerWhite>

            </ContainerBlack>

            <ModalDefault
                visible={modalVisible}
                height={'41.5%'}
                navigation={navigation}
                onClose={() => { setModalVisible(false), navigation.replace("Login") }}
                setModalVisible={setModalVisible}
                title={"Conta criada com sucesso!"}
                subTitle={"Sua conta foi criada. Aproveite ao máximo todos os benefícios que oferecemos."}
                buttonText={"Ir para Login"}
            />
        </>
    )
}