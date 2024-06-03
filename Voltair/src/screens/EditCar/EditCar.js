import { ContainerBlack, ContainerBlackHome } from "../../components/Container/Style"
import { InputBlack } from "../../components/Input/Style"
import { TextInput, Title } from "../../components/Title/Style"

export const EditCar = ({}) => {
    return(
    <>
    <ContainerBlack>
        <Title color={"#FFF"} margin={"45px 0px 35px 0px"}>
            Informe os dados do seu carro
        </Title>

        <TextInput
            margin={"20px 0px 20px 0px"} 
        >Marca</TextInput>
        <InputBlack
            height={"53px"} 
            margin={"39px 0px 0px 0px"} 
        />
    </ContainerBlack>
    </>
    )
}