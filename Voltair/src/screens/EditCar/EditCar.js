import { ScrollView, TouchableOpacity } from "react-native";
import { ButtonDefault, ButtonInput, ImageInput } from "../../components/Button/Button";
import { ContainerBlack, ContainerBlackMap, ContainerHome, ContainerLabelInput, ContainerScroll } from "../../components/Container/Style"
import { InputSelect } from "../../components/Input/InputSelect"
import { InputBlack, ViewInput } from "../../components/Input/Style"
import { TextInput, TextLink, Title } from "../../components/Title/Style"

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ButtonLogOut } from "../../components/Button/Style";


export const EditCar = ({ navigation}) => {

    const carBrands = [
        { label: "Ford", value: "Ford" },
        { label: "Chevrolet", value: "Chevrolet" },
        { label: "Toyota", value: "Toyota" },
        
    ];
    const electricCarModels = [
        { label: "Mustang Mach-E", value: "Mustang Mach-E" },
        { label: "Bolt EV", value: "Bolt EV" },
        { label: "bZ4X", value: "bZ4X" },
    ]

    return (
        <ContainerHome>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <ContainerBlackMap height={"100%"} flexDirection={"column"} justifyContent={"flex-start"}>
                <Title color={"#FFF"} margin={"25px 0px 10px 0px"}>
                    Informe os dados do seu carro
                </Title>

                <ContainerLabelInput>
                    <TextInput margin={"10px 0px 0px 15px"}>Marca</TextInput>
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
                <ViewInput>
                    <InputBlack
                        height={"53px"}
                        margin={"5px 0px 25px 0px"}
                    >

                    </InputBlack>

                    <ButtonInput onPress={() => navigation.navigate("Camera")}>
                            <ImageInput source={require('../../../assets/Img/camera-laranja.png')}
                            />
                        </ButtonInput>
                </ViewInput>



                <ButtonDefault
                    text={"Confirmar"}
                    height={"58px"}
                    margin={"25px 0px 0px 0px"}
                />

                <ButtonLogOut margin={"20px 0px 145px 0px"}>
                    <TextLink style={{ color: '#FFFFFF' }} margin={"0px 0px 0px 0px"}>
                        Sair do app
                    </TextLink>
                </ButtonLogOut>

            </ContainerBlackMap>
                </ScrollView>
                </ContainerHome>
        
    )
}