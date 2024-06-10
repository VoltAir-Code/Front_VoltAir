import { ScrollView, TouchableOpacity } from "react-native";
import { ButtonDefault, ButtonInput, ImageInput } from "../../components/Button/Button";
import { ContainerBlack, ContainerBlackMap, ContainerHome, ContainerLabelInput, ContainerScroll } from "../../components/Container/Style"
import { InputSelect } from "../../components/Input/InputSelect"
import { InputBlack, ViewInput } from "../../components/Input/Style"
import { TextInput, TextLink, Title } from "../../components/Title/Style"
import { Feather } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ButtonLogOut } from "../../components/Button/Style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/Service"
import { useEffect, useState } from "react";



export const EditCar = ({ navigation }) => {

    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);


    const [carData, setCarData] = useState();

    const [carBrandData, setCarBrandData] = useState();

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



    async function ListCarBrand() {
        await api.get('Marca')
            .then((response) => {
                setCarBrandData(response.data)
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            }
            )
    }

    async function ListCar() {
        await api.get('Carro')
            .then((response) => {
                setCarData(response.data)
            })
            .catch((error) => {
                console.log(error);
            }
            )
    }

    function FoundCar() {
        if (carData != null) {
            return carData.map((car) => ({
                label: car.modelo,
                value: car.modelo,
            }));
        } else {
            return [];
        }
    }

    function FoundBrand() {
        if (carBrandData != null) {
            return carBrandData.map((brand) => ({
                label: brand.idMarca,
                value: brand.nomeMarca,
            }));
        } else {
            return [];
        }
    }

    useEffect(() => {
        ListCarBrand();
        ListCar();
    }, [])

    async function Logout() {
        try {
            await AsyncStorage.removeItem("token", navigation.replace("Login"))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ContainerHome>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ContainerBlackMap radius={"0px"} height={"100%"} flexDirection={"column"} justifyContent={"flex-start"}>
                    <Title color={"#FFF"} margin={"25px 0px 10px 0px"}>
                        Informe os dados do seu carro
                    </Title>

                    <ContainerLabelInput>
                        <TextInput margin={"10px 0px 0px 15px"}>Marca</TextInput>
                    </ContainerLabelInput>
                    <InputSelect
                        item={FoundBrand}
                        setSelected={(value) => setSelectedBrand(value)}
                        save=''
                    />

                    <ContainerLabelInput>
                        <TextInput margin={"20px 0px 0px 15px"}>Modelo</TextInput>
                    </ContainerLabelInput>
                    <InputSelect
                        item={FoundCar}
                        setSelected={(value) => setSelectedModel(value)}
                        save=''
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
                            editable={false}
                        />


                        <ButtonInput onPress={() => { navigation.navigate("Camera"); console.log("Cam"); }}>
                            <Feather name="camera" size={24} color="#F2732E" />
                        </ButtonInput>

                    </ViewInput>



                    <ButtonDefault
                        text={"Confirmar"}
                        height={"58px"}
                        margin={"25px 0px 0px 0px"}
                    />

                    <ButtonLogOut onPress={() => Logout()} margin={"20px 0px 145px 0px"}>
                        <TextLink style={{ color: '#FFFFFF' }} margin={"0px 0px 0px 0px"}>
                            Sair do app
                        </TextLink>
                    </ButtonLogOut>


                </ContainerBlackMap>
            </ScrollView>
        </ContainerHome>

    )
}