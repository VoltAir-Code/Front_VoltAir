import { Alert, ScrollView, TouchableOpacity } from "react-native";
import { ButtonDefault, ButtonInput, ImageInput } from "../../components/Button/Button";
import { ContainerBlack, ContainerBlackMap, ContainerHome, ContainerLabelInput, ContainerScroll } from "../../components/Container/Style"
import { InputSelect } from "../../components/Input/InputSelect"
import { InputBlack, ViewInput } from "../../components/Input/Style"
import { SubTitle, TextInput, TextLink, TextWarning, Title } from "../../components/Title/Style"
import { Feather } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ButtonLogOut, ButtonLogOutText } from "../../components/Button/Style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/Service"
import { useEffect, useMemo, useRef, useState } from "react";
import { useDecodeToken } from "../../utils/Auth";
import ModalOcr from "../../components/Modal/ModalOcr";
import { ActivityIndicator } from "react-native";




export const EditCar = ({ navigation, route, photoUri }) => {
    const [user, setUser] = useState();
    const [userCarData, setUserCarData] = useState(null);

    const [selectedModel, setSelectedModel] = useState(null);
    
    const [carData, setCarData] = useState();
    const [carBrandData, setCarBrandData] = useState();
    const [carModelData, setCarModelData] = useState();
    
    const [plate, setPlate] = useState("");
    const [editable, setEditable] = useState(true);
    
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingLoggout, setLoadingLogout] = useState(false)
    
 
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
            OCR();
        }
    }, [photoUri]);



    async function RegisterCar() {
        setLoading(true);
        
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (selectedBrand || selectedModel != null) {
            const plateRegex = /^(?=(?:.*[A-Za-z]){4})(?=(?:.*\d){3})[A-Za-z\d]{7}$/;
            if (plate != "" && plate.length == 7 && plateRegex.test(plate)) {
                try {
                    await api.put(`Carro?idUsuario=${user.idUsuario}`, {
                        idUsuario: user.idUsuario,
                        idModelo: selectedModel,
                        placa: ValidationPlate(plate)
                    })
                    setEditable(false)
                } catch (error) {
                    console.log(error);
                }
            } else {
                Alert.alert('Voltaire - Alerta', "Informe a placa corretamente!")
            }
        }

        else {
            Alert.alert('Voltaire - Alerta',"Informe os dados corretamente!")
        }
        setLoading(false);
    }


    async function GetUserCar() {
        const token = await useDecodeToken();
        try {
            const response = await api.get(`Carro/BuscarPorId?idUser=${token.id}`);
            setPlate(response.data.placa)
            setUserCarData(response.data)
            console.log(response.data.idModeloNavigation);
            console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
            setCarBrandData(response.data?.idModeloNavigation)

            if (response.data != '') {
                setEditable(false)
            }

        } catch (error) {
            console.log(error);
        }
    }



    async function profileLoad() {
        const token = await useDecodeToken();
        try {
            const response = await api.get(`Usuario/BuscarPorId?id=${token.id}`);
            setUser(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    const [selectedBrand, setSelectedBrand] = useState(null); 
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
    async function ListCar(idMarca) {
        await api.get(`Marca/BuscarPorId?idMarca=${idMarca}`)
            .then((response) => {
                setCarData(response.data.modelos);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async function GetModelData() {
        await api.get(`Model/BuscarPorId?idModelo=${selectedModel}`)
            .then((response) => {
                setCarModelData(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
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
        setLoadingLogout(true); // Define o estado de carregamento como verdadeiro

        try {
            // Aguarda 2 segundos antes de prosseguir com o logout
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Realiza o logout removendo o token e redirecionando para a tela de login
            await AsyncStorage.removeItem("token");
            navigation.replace("Login");
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingLogout(false); // Define o estado de carregamento como falso após o logout
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
            setPlate(response.data)

            setModalVisible(true);
        }).catch((err) => {
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
                                        <TextInput margin={"5px 0px 0px 15px"}>Marca</TextInput>
                                    </ContainerLabelInput>
                                    <InputSelect
                                        item={FoundBrand}
                                        setSelected={(value) => setSelectedBrand(value)}
                                        save='key'
                                        placeholder='Selecione uma Marca'
                                    selected={selectedBrand}
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
                                            value={ValidationPlate(plate)}
                                            maxLength={7}
                                        />

                                        <ButtonInput onPress={() => { editable ? navigation.navigate("Camera") : null }}>
                                            <Feather name="camera" size={24} color="#F2732E" />
                                        </ButtonInput>
                                    </ViewInput>

               

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
                            loading={loading}
                            onPress={() => editable ? RegisterCar() : setEditable(true)}
                        />

                        <ButtonLogOut onPress={() => Logout()} margin={"35px 0px 145px 0px"}>
                            {loadingLoggout ? (
                                <ActivityIndicator color="#FFFFFF" /> // Mostra o indicador de atividade durante o carregamento
                            ) : (
                                <ButtonLogOutText>Sair do app</ButtonLogOutText> // Mostra o texto normal quando não está carregando
                            )}
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