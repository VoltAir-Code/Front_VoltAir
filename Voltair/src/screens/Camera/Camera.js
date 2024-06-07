import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { ContainerHome, FooterCamera } from "../../components/Container/Style";
import { ButtonCamera, ButtonDefault, ButtonGallery, ButtonReturn, ImageCircle, ImageGallery, ImageReturn } from "../../components/Button/Button";
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';

import Svg, { Circle, Rect } from 'react-native-svg';
import CameraIcon from "../../components/icons/CameraIcon";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Title } from "../../components/Title/Style";



export const Camera = ({ navigation, route }) => {
    const cameraRef = useRef(null);
    const [photo, setPhoto] = useState(null);
    const [tipoCamera, setTipoCamera] = useState('back');
    const [flashMode, setFlashMode] = useState('off');
    const [autoFocus, setAutoFocus] = useState('off');
    const [lastedPhoto, setLastedPhoto] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();

    useEffect(() => {
        (async () => {
            const { status } = await requestPermission();
            if (status !== 'granted') {
                alert('Desculpe, precisamos de permissões da câmera para usar este recurso.');
            }
        })();
    }, []);

    //   useEffect(() => {
    //       requestPermission();
    //       GetLastPhoto();
    //   }, []);


    async function CapturePhoto() {
        // Ativar o foco automático antes de tirar a foto
        setAutoFocus('on');

        // Esperar um curto período de tempo para permitir que o foco automático seja aplicado
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Tirar a foto após o foco automático ser aplicado
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync({
                quality: 1,
            });
            await setPhoto(photo.uri);
            console.log(photo.uri);
            setOpenModal(true)
        }
    }

    async function SelectImageGallery() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setPhoto(result.uri);
        }
    }

    function ToggleFlashMode() {
        setFlashMode(
            flashMode === ExpoCamera.Constants.FlashMode.on
                ? ExpoCamera.Constants.FlashMode.off
                : ExpoCamera.Constants.FlashMode.on,
        );
    }

    function ClearPhoto() {
        setPhoto(null);
        setOpenModal(false);
    }

    async function SendPhoto() {
        if (photo) {
            setOpenModal(false);
            navigation.navigate('EditCar', { photoUri: photo });
        }
    }

    function toggleCameraFacing() {
        setTipoCamera(current => (current === 'back' ? 'front' : 'back'));
    }


    function backCamera(){
        setOpenModal(false)
    }

    return (
        <ContainerHome>
            <CameraView
                style={{ flex: 1 }}
                facing={tipoCamera}
                ratio={'16:9'}
                ref={cameraRef}
                flashMode={flashMode}
                autoFocus={autoFocus}
            />
            <FooterCamera >
                <ButtonGallery
                    onPress={SelectImageGallery}
                >

                    <ImageGallery source={require("../../../assets/Img/picture.png")} />
                </ButtonGallery>

                <ButtonCamera
                    onPress={CapturePhoto}
                >
                    {/* {<CameraIcon color={"#F2732E"} size={60} />} */}
                    <ImageCircle source={require("../../../assets/Img/camera.png")} />
                </ButtonCamera>


                <ButtonReturn
                    onPress={toggleCameraFacing}
                >
                    <ImageReturn source={require("../../../assets/Img/return.png")} />
                </ButtonReturn>
            </FooterCamera>


            <Modal
                animationType="slide"
                transparent={false}
                visible={openModal}
            >
                <View style={styles.modalCamera}>

                    <Title
                        margin={"0px 0px 20px 0px"}
                        color={'#313'}
                    >Lendo a placa</Title>
                    <Image
                        style={styles.vizualizeImage}
                        source={{ uri: photo }}

                    />
                    <View style={{ width: '100%', flexDirection: "row", justifyContent: "center", flexDirection:'column', alignItems:'center'}}>

                        <ButtonDefault
                            text={"Confirmar"}
                            height={"58px"}
                            margin={"10px 0px 0px 0px"}
                            onPress={SendPhoto}
                        />
                        <ButtonDefault
                            text={"Voltar"}
                            height={"58px"}
                            margin={"10px 0px 0px 0px"}
                            onPress={backCamera}
                        />
                    </View>
                </View>
            </Modal>

        </ContainerHome>


    );
};

const styles = StyleSheet.create({
    modalCamera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `rgba(0, 0, 0, 0.3)`
    },
    vizualizeImage: {
        width: '80%',
        height: 250,
        borderRadius: 10,
    },

});