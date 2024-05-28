import { useState } from "react"
import { ButtonDefault } from "../../components/Button/Button"
import { ContainerBlack, ContainerWhite } from "../../components/Container/Style"
import { InputWhite } from "../../components/Input/Style"
import { LogoRayOrange } from "../../components/Logo/Style"
import { SubTitle, TextLink, Title } from "../../components/Title/Style"
import ModalDefault from "../../components/Modal/ModalDefault"

export const ForgotPassword = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <ContainerBlack>

                <LogoRayOrange
                    source={require("../../../assets/Logo/LogoRay.png")} margin={"0px 0px 20px 0px"}
                />

                <ContainerWhite height={"88%"}>

                    <Title color={"#313131"} margin={"25% 0px 0px 0px"}>
                        Esqueceu sua senha?
                    </Title>
                    <SubTitle color={"#313131"} margin={"20px 0px 20px 0px"}>
                        Digite seu e-mail abaixo e enviaremos um código
                    </SubTitle>

                    <InputWhite height={"53px"} margin={"39px 0px 35px 0px"} placeholder={"digite seu e-mail"} />

                    <ButtonDefault
                        text={"Enviar e-mail"}
                        height={"58px"}
                        margin={"0px 0px 0px 0px"}
                        onPress={() => setModalVisible(true)}
                    />

                    <TextLink margin={"16px 0px 0px 0px"}>
                        Voltar
                    </TextLink>

                </ContainerWhite>

            </ContainerBlack>

            <ModalDefault
                visible={modalVisible}
                navigation={navigation}
                setModalVisible={setModalVisible}
                onClose={() => {setModalVisible(false)}} //Falta colocar o navigation.replace
                title={"Foi enviado um e-mail para:"}
                subTitle={"Variavel"}
                buttonText={"Confirmar"}
                textLink={"voltar"}
            />
        </>

    )

}