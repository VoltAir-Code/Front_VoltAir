import { Alert, ScrollView, TouchableOpacity } from "react-native";
import { ButtonDefault, ButtonInput, ImageInput } from "../../components/Button/Button";
import { ContainerBlack, ContainerBlackMap, ContainerHome, ContainerLabelInput, ContainerScroll } from "../../components/Container/Style"
import { InputSelect } from "../../components/Input/InputSelect"
import { InputBlack, ViewInput } from "../../components/Input/Style"
import { SubTitle, TextInput, TextLink, TextWarning, Title } from "../../components/Title/Style"
import { Feather } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ButtonLogOut } from "../../components/Button/Style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/Service"
import { useEffect, useMemo, useRef, useState } from "react";
import { useDecodeToken } from "../../utils/Auth";
import ModalOcr from "../../components/Modal/ModalOcr";




export const EditCar = ({ navigation, route, photoUri }) => {
    const [user, setUser] = useState();
    const [userCarData, setUserCarData] = useState(null);

    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);

    const [carData, setCarData] = useState();
    const [carBrandData, setCarBrandData] = useState();
    const [carModelData, setCarModelData] = useState();

    const [plate, setPlate] = useState("");
    const [editable, setEditable] = useState(true);

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        profileLoad();
        ListCarBrand();
    }, [])

    useEffect(() => {
        GetUserCar();
    }, []);

    useEffect(() => {
        if (editable == false) {
            GetUserCar();
        }
    }, [editable]);


    useEffect(() => {
        setSelectedModel(null);
        ListCar(selectedBrand);
    }, [selectedBrand]);

    useEffect(() => {
        GetModelData();
    }, [selectedModel])

    useEffect(() => {
        if (photoUri != {}) {
            console.log(photoUri);
            OCR();
        }
    }, [photoUri]);



    async function RegisterCar() {

        if (selectedBrand || selectedModel != null) {
            const plateRegex = /^(?=(?:.*[A-Za-z]){4})(?=(?:.*\d){3})[A-Za-z\d]{7}$/;
            if (plate != "" && plate.length == 7 && plateRegex.test(plate)) {
                try {
                    await api.put(`Carro?idUsuario=${user.idUsuario}`, {
                        idUsuario: user.idUsuario,
                        idModelo: selectedModel,
                        placa: ValidationPlate(plate),
                        bateriaAtual: carModelData.durBateria
                    })
                    setEditable(false)
                } catch (error) {
                    console.log("RegisterCar");
                    console.log(error);
                }
            } else {
                Alert.alert("Informe a placa corretamente!")
            }
        }

        else {
            Alert.alert("Informe os dados corretamente!")
        }
    }


    async function GetUserCar() {
        const token = await useDecodeToken();
        try {
            const response = await api.get(`Carro/BuscarPorId?idUser=${token.id}`);
            setUserCarData(response.data)

            if (response.data != '') {
                setEditable(false)
            }

        } catch (error) {
            console.log("GetUserCar");
            console.log(error);
        }
    }



    async function profileLoad() {
        const token = await useDecodeToken();
        try {
            const response = await api.get(`Usuario/BuscarPorId?id=${token.id}`);
            setUser(response.data);

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
                setCarData(response.data.modelos);
            })
            .catch((error) => {
                console.log("ListCar");
                console.log(error);
            });
    }

    async function GetModelData() {
        await api.get(`Model/BuscarPorId?idModelo=${selectedModel}`)
            .then((response) => {
                console.log("Modelo Data: ", response.data);
                setCarModelData(response.data)
            })
            .catch((error) => {
                console.log("GetModelData");
                console.log(error);
            })
    }

    function FoundCar() {
        if (carData != null) {
            return carData.map((car) => ({
                key: car.idModelo,
                value: car.nomeModelo,
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
            console.log("OCRDATA: ", response.data);
            setPlate(response.data)

            setModalVisible(true);
        }).catch((err) => {
            console.log("OCR");
            console.log(err);
        })
    }

    function ValidationPlate(plate) {
        const plateArray = plate.split(" ")
        for (var i = 0; i < plateArray.length; i++) {
            const lastStr = plateArray[plateArray.length - (i + 1)]
            if (lastStr.trim() == "") {

            }
            else {
                return lastStr;
            }
        }
    }


    return (
        <>
            <ContainerHome>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <ContainerBlackMap radius={"0px"} height={"100%"} flexDirection={"column"} justifyContent={"flex-start"}>
                        <Title color={"#FFF"} margin={"45px 0px 10px 0px"}>
                            Informe os dados do seu carro
                        </Title>

                        <TextWarning color={"#FFF"} margin={"5px 0px 15px 0px"}>
                            Cadastre com 100% de bateria!
                        </TextWarning>

                        {
                            editable ?
                                <>

                                    <ContainerLabelInput>
                                        <TextInput margin={"35px 0px 0px 15px"}>Número da placa</TextInput>
                                    </ContainerLabelInput>

                                    <ViewInput>
                                        <InputBlack
                                            height={"60px"}
                                            margin={"5px 0px 25px 0px"}
                                            editable={true}
                                            placeholder={plate != "" ? ValidationPlate(plate) : "Registre sua placa"}
                                            autoCapitalize="characters"
                                            onChangeText={txt => setPlate(txt.toUpperCase())}
                                            value={plate}
                                            maxLength={7}
                                        />

                                        <ButtonInput onPress={() => { editable ? navigation.navigate("Camera") : null }}>
                                            <Feather name="camera" size={24} color="#F2732E" />
                                        </ButtonInput>
                                    </ViewInput>

                                    <ContainerLabelInput>
                                        <TextInput margin={"5px 0px 0px 15px"}>Marca</TextInput>
                                    </ContainerLabelInput>
                                    <InputSelect
                                        item={FoundBrand}
                                        setSelected={(value) => setSelectedBrand(value)}
                                        save='key'
                                        placeholder='Selecione uma Marca'
                                    />


                                    <ContainerLabelInput>
                                        <TextInput margin={"35px 0px 0px 15px"}>Modelo</TextInput>
                                    </ContainerLabelInput>

                                    <InputSelect
                                        item={FoundCar}
                                        setSelected={(value) => setSelectedModel(value)}
                                        save='key'
                                        placeholder='Selecione um modelo'
                                    />

                                </>
                                :
                                <>
                                    <ContainerLabelInput>
                                        <TextInput margin={"35px 0px 0px 15px"}>Marca</TextInput>
                                    </ContainerLabelInput>
                                    <InputBlack
                                        height={"60px"}
                                        margin={"5px 0px 0px 0px"}
                                        editable={false}
                                        placeholder={userCarData != '' ? `${userCarData.idModeloNavigation?.idMarcaNavigation?.nomeMarca}` : 'Not Found'}
                                    />

                                    <ContainerLabelInput>
                                        <TextInput margin={"35px 0px 0px 15px"}>Modelo</TextInput>
                                    </ContainerLabelInput>
                                    <InputBlack
                                        height={"60px"}
                                        margin={"5px 0px 0px 0px"}
                                        editable={false}
                                        placeholder={userCarData != '' ? `${userCarData.idModeloNavigation?.nomeModelo}` : 'Not Found'}
                                    />

                                    <ContainerLabelInput>
                                        <TextInput margin={"35px 0px 0px 15px"}>Número da placa</TextInput>
                                    </ContainerLabelInput>
                                    <InputBlack
                                        height={"60px"}
                                        margin={"5px 0px 25px 0px"}
                                        editable={false}
                                        placeholder={userCarData != null ? `${userCarData.placa}` : 'Not Found'}
                                    />
                                </>

                        }





                        <ButtonDefault
                            text={editable ? "Confirmar" : "Editar"}
                            height={"58px"}
                            margin={"45px 0px 0px 0px"}
                            onPress={() => { editable ? RegisterCar() : setEditable(true) }}
                        />

                        <ButtonLogOut onPress={() => Logout()} margin={"35px 0px 145px 0px"}>
                            <TextLink style={{ color: '#FFFFFF' }} margin={"0px 0px 0px 0px"}>
                                Sair do app
                            </TextLink>
                        </ButtonLogOut>


                    </ContainerBlackMap>
                </ScrollView>
            </ContainerHome>

            <ModalOcr
                visible={modalVisible}
                height={'41.5%'}
                navigation={navigation}
                onConfirm={() => { setModalVisible(false), setEditable(true) }}
                onClose={() => { setModalVisible(false), setPlate(""), setEditable(true) }}
                setModalVisible={setModalVisible}
                title={"Esta e sua placa?"}
                subTitle={ValidationPlate(plate)}
                buttonText={"Confirmar placa"}
                buttonText2={"Não, quero escrever"}
            />
        </>
    )
}