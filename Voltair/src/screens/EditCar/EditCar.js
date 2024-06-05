import { TouchableOpacity } from "react-native";
import { ButtonDefault } from "../../components/Button/Button";
import { ContainerBlackMap, ContainerLabelInput } from "../../components/Container/Style"
import { InputSelect } from "../../components/Input/InputSelect"
import { InputBlack } from "../../components/Input/Style"
import { TextInput, TextLink, Title } from "../../components/Title/Style"

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ButtonLogOut } from "../../components/Button/Style";


export const EditCar = ({ }) => {

    const carBrands = [
        { label: "Ford", value: "Ford" },
        { label: "Chevrolet", value: "Chevrolet" },
        { label: "Toyota", value: "Toyota" },
        // Adicione mais marcas conforme necessário
    ];
    const electricCarModels = [
        { label: "Mustang Mach-E", value: "Mustang Mach-E" },
        { label: "Bolt EV", value: "Bolt EV" },
        { label: "bZ4X", value: "bZ4X" },
    ]

    return (
        <>
            <ContainerBlackMap height={"100%"} flexDirection={"column"} justifyContent={"flex-start"}>
                <Title color={"#FFF"} margin={"35px 0px 15px 0px"}>
                    Informe os dados do seu carro
                </Title>

                <ContainerLabelInput>
                    <TextInput margin={"20px 0px 0px 15px"}>Marca</TextInput>
                </ContainerLabelInput>
                <InputSelect
                    item={carBrands}
                />

                <ContainerLabelInput>
                    <TextInput margin={"20px 0px 0px 15px"}>Modelo</TextInput>
                </ContainerLabelInput>
                <InputSelect
                    item={electricCarModels}
                />

                <ContainerLabelInput>
                    <TextInput margin={"20px 0px 0px 15px"}>Duração da bateria</TextInput>
                </ContainerLabelInput>
                <InputBlack
                    height={"53px"}
                    margin={"5px 0px 0px 0px"}
                    placeholder={"Duração"}
                />

                <ContainerLabelInput>
                    <TextInput margin={"20px 0px 0px 15px"}>Número da placa</TextInput>
                </ContainerLabelInput>
                <InputBlack
                    height={"53px"}
                    margin={"5px 0px 25px 0px"}
                />


                <ButtonDefault
                    text={"Confirmar"}
                    height={"58px"}
                    margin={"25px 0px 0px 0px"}
                />

                <ButtonLogOut margin={"20px 0px 0px 0px"}>
                    <TextLink style={{ color: '#FFFFFF'}} margin={"0px 0px 0px 0px"}>
                        Sair do app
                    </TextLink>
                </ButtonLogOut>


            </ContainerBlackMap>
        </>
    )
}