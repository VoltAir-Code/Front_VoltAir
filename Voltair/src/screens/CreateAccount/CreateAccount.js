import { Image } from "react-native"
import { ButtonDefault } from "../../components/Button/Button"
import { ContainerBlack, ContainerWhite } from "../../components/Container/Style"
import { InputWhite } from "../../components/Input/Style"
import {TextLink} from "../../components/Title/Style"


export const CreateAccount = () => {
    return (
        <>
            <ContainerBlack>
            
                <ContainerWhite height={"91.41%"}>
                    <InputWhite height={"53px"} margin={"39px 0px 0px 0px"} placeholder={"digite seu nome"} />
                    <InputWhite height={"53px"} margin={"39px 0px 0px 0px"} placeholder={"digite seu melhor e-mail"} />
                    <InputWhite height={"53px"} margin={"39px 0px 0px 0px"} placeholder={"digite sua senha"} />
                    <InputWhite height={"53px"} margin={"39px 0px 108px 0px"} placeholder={"confirme sua senha"} />
                    <ButtonDefault
                        text={"Cadastrar"}
                        height={"58px"}
                    />

                    <TextLink marginTop={"19px"}>Cancelar</TextLink>

                </ContainerWhite>
            </ContainerBlack>
        </>
    )
}