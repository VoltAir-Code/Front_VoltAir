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
import { useDecodeToken } from "../../utils/Auth";







export const EditCar = ({ navigation, route }) => {
    const [user, setUser] = useState();

    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);

    const [carData, setCarData] = useState();
    const [carBrandData, setCarBrandData] = useState();

    const [plate, setPlate] = useState("");
    const { photoUri } = route.params || {};


    useEffect(() => {
        ListCar(selectedBrand);
    }, [selectedBrand]);

    useEffect(() => {
        profileLoad()
    }, [])


    async function RegisterCar() {
        try {
            await api.put('Usuario/AlterarPerfil', {
                Nome: user.nome,
                Email: user.email,
                Senha: user.senha,
                IdCarro: selectedModel,
                Foto: null,
                Arquivo: plate,
            })
        } catch (error) {
            console.log("RegisterCar");
            console.log(error);
        }
    }

    async function profileLoad() {
        const token = await useDecodeToken();
        try {
          const response = await api.get(`Usuario/BuscarPorId?id=${token.id}`);
          setUser(response.data);
          console.log(response.data);
        } catch (error) {
            console.log("ProfileLoad");
          console.log(error);
        }
      }


    async function ListCarBrand() {
        await api.get('Marca')
            .then((response) => {
                setCarBrandData(response.data)
                console.log(response.data);
            })
            .catch((error) => {
                console.log("ListCarBrand");
                console.log(error);
            }
            )
    }

    async function ListCar(idMarca) {
        await api.get(`Marca/BuscarPorId?idMarca=${idMarca}`)
            .then((response) => {
                setCarData(response.data.carros);
            })
            .catch((error) => {
                console.log("ListCar");
                console.log(error);
            });
    }

    function FoundCar() {
        if (carData != null) {
            return carData.map((car) => ({
                key: car.idCarro,
                value: car.modelo,
            }));
        } else {
            return [];
        }
    }

    function FoundBrand() {
        if (carBrandData != null) {
            return carBrandData.map((brand) => ({
                key: brand.idMarca,
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

    async function OCR() {
        const formData = new FormData();
        formData.append("Image", {
            uri: photoUri,
            name: `image.jpg`,
            type: `image/jpeg`
        })

        await api.post(`Orc`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            console.log(response.data);
            setPlate(response.data)
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        if (photoUri != {}) {
            console.log(photoUri);
            OCR();
        }
    }, [photoUri]);


    return (
        <ContainerHome>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ContainerBlackMap radius={"0px"} height={"100%"} flexDirection={"column"} justifyContent={"flex-start"}>
                    <Title color={"#FFF"} margin={"45px 0px 10px 0px"}>
                        Informe os dados do seu carro
                    </Title>

                    <ContainerLabelInput>
                        <TextInput margin={"35px 0px 0px 15px"}>Marca</TextInput>
                    </ContainerLabelInput>
                    <InputSelect
                        item={FoundBrand}
                        setSelected={(value) => setSelectedBrand(value)}
                        save='key'
                    />

                    <ContainerLabelInput>
                        <TextInput margin={"35px 0px 0px 15px"}>Modelo</TextInput>
                    </ContainerLabelInput>
                    <InputSelect
                        item={FoundCar}
                        setSelected={(value) => setSelectedModel(value)}
                        save='key'
                    />

                    <ContainerLabelInput>
                        <TextInput margin={"35px 0px 0px 15px"}>Número da placa</TextInput>
                    </ContainerLabelInput>

                    <ViewInput>
                        <InputBlack
                            height={"53px"}
                            margin={"5px 0px 25px 0px"}
                            editable={false}
                            placeholder={plate != "" ? plate : "Registre sua placa"}
                        />

                        <ButtonInput onPress={() => { navigation.navigate("Camera"); console.log("Cam"); }}>
                            <Feather name="camera" size={24} color="#F2732E" />
                        </ButtonInput>
                    </ViewInput>



                    <ButtonDefault
                        text={"Confirmar"}
                        height={"58px"}
                        margin={"45px 0px 0px 0px"}
                    />

                    <ButtonLogOut onPress={() => Logout()} margin={"35px 0px 145px 0px"}>
                        <TextLink style={{ color: '#FFFFFF' }} margin={"0px 0px 0px 0px"}>
                            Sair do app
                        </TextLink>
                    </ButtonLogOut>


                </ContainerBlackMap>
            </ScrollView>
        </ContainerHome>

    )
}