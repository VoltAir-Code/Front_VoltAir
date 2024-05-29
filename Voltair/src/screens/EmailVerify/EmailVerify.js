import { TouchableOpacity } from "react-native"
import { ButtonDefault } from "../../components/Button/Button"
import { ContainerBlack, ContainerWhite } from "../../components/Container/Style"
import { InputVerify } from "../../components/Input/Style"
import { LogoRayOrange } from "../../components/Logo/Style"
import { SubTitle, TextLink, Title } from "../../components/Title/Style"
import { ContentVerify } from "./Style"

export const EmailVerify = ({navigation}) => {
    return (
        <ContainerBlack>

            <LogoRayOrange
                source={require("../../../assets/Logo/LogoRay.png")} margin={"0px 0px 20px 0px"}
            />

            <ContainerWhite height={"88%"}>

                <Title color={"#313131"} margin={"65px 0px 35px 0px"}>
                    Digite o código enviado:
                </Title>

                <SubTitle color={"#313131"} margin={"0px 0px 20px 0px"}>
                    variavel@email.com
                </SubTitle>

                <ContentVerify margin={"20px 0px 54px 0px"}>

                    <InputVerify height={"60px"} margin={"0px 0px 0px 0px"} placeholder={"0"} />
                    <InputVerify height={"60px"} margin={"0px 0px 0px 0px"} placeholder={"0"} />
                    <InputVerify height={"60px"} margin={"0px 0px 0px 0px"} placeholder={"0"} />
                    <InputVerify height={"60px"} margin={"0px 0px 0px 0px"} placeholder={"0"} />

                </ContentVerify>

                <ButtonDefault
                    text={"Resetar senha"}
                    height={"58px"}
                    margin={"0px 0px 0px 0px"}
                />

                <TouchableOpacity>

                <TextLink margin={"16px 0px 0px 0px"}>
                    Reenviar código
                </TextLink>
                
                </TouchableOpacity>

            </ContainerWhite>

        </ContainerBlack>

    )
}