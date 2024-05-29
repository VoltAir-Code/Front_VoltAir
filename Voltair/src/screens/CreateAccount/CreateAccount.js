import { ButtonDefault } from "../../components/Button/Button"
import { ContainerBlack, ContainerWhite } from "../../components/Container/Style"
import { InputWhite } from "../../components/Input/Style"
import { LogoRayOrange } from "../../components/Logo/Style"
import ModalDefault from "../../components/Modal/ModalDefault"
import { TextLink } from "../../components/Title/Style"
import { useState } from "react"

export const CreateAccount = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <ContainerBlack>
                <LogoRayOrange margin={"0px 0px 4px 0px"} source={require("../../../assets/Logo/LogoRay.png")}/>
                <ContainerWhite height={"91.41%"}>
                    <InputWhite height={"53px"} margin={"39px 0px 0px 0px"} placeholder={"digite seu nome"} />
                    <InputWhite height={"53px"} margin={"39px 0px 0px 0px"} placeholder={"digite seu e-mail"} />
                    <InputWhite height={"53px"} margin={"39px 0px 0px 0px"} placeholder={"digite sua senha"} />
                    <InputWhite height={"53px"} margin={"39px 0px 108px 0px"} placeholder={"confirme sua senha"} />
                    <ButtonDefault
                        text={"Cadastrar"}
                        height={"58px"}
                        margin={"0px 0px 0px 0px"}
                        onPress={() => setModalVisible(true)}
                    />

                    <TextLink margin={"19px 0px 0px 0px"}>Cancelar</TextLink>

                </ContainerWhite>

            </ContainerBlack>

            <ModalDefault
                visible={modalVisible}
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