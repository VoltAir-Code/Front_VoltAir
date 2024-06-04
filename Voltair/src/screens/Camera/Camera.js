
import { useEffect, useRef, useState } from "react";
import { ButtonCamera, ButtonGallery, ButtonReturn, ImageCircle, ImageGallery, ImageRay, ImageReturn, Provisorio } from "../../components/Button/Button"
import { ContainerCamera, FooterCamera } from "../../components/Container/Style"
import {  useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';

export const Camera = (navigation, route) => {
    const cameraRef = useRef(null)

    const [photo, setPhoto] = useState(null);

    const [tipoCamera, setTipoCamera] = useState('back');

    const [permission, requestPermission] = useCameraPermissions();

    const [flashMode, setFlashMode] = useState('off');

    const [autoFocus, setAutoFocus] = useState('off');

    const [lastedPhoto, setLastedPhoto] = useState(null)


    //   if (!permission) {
    //  	alert('carregando permissao');
    //  }

    //  if (!permission.granted) {
    //  	return(
    //  		<></>
    //  	)
    //  }


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
            setOpenModal(true);
        }
    }

    async function SelectImageGallery() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });
    }

    async function GetLastPhoto() {
        const { assets } = await MediaLibrary.getAssetsAsync({
            sortBy: [[MediaLibrary.SortBy.creationTime, false]],
            first: 1,
        });

        console.log(assets);

        if (assets.length > 0) {
            setLastedPhoto(assets[0].uri);
        }
    }

    async function SelectImageGallery() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        console.log(result.assets[0].uri);

        if (!result.canceled) {
            setPhoto(result.assets[0].uri);
            setOpenModal(true);
        }
    }

    // Solicitar permissões da câmera e da galeria ao montar o componente
    useEffect(() => {
        GetLastPhoto();
    }, []);



    function ToggleFlashMode() {
        setFlashMode(
            flashMode === 'on'
                ? 'off'
                : 'on',
        );
    }

    function toggleCameraFacing() {
        setTipoCamera(current => (current === 'back' ? 'front' : 'back'));
    }

    return (
        <ContainerCamera>
            {/* <CameraView
                
                facing={tipoCamera}
                ratio={'16:9'}
                ref={cameraRef}
                flash={flashMode}
                autoFocus={autoFocus}
            >
            </CameraView> */}

            <Provisorio />

            <FooterCamera>

                <ButtonGallery onPress={() => SelectImageGallery()}>
                    {lastedPhoto != null ? (
                        <ImageGallery source={{ uri: lastedPhoto }} />
                    ) : null}
                </ButtonGallery>

                <ButtonCamera
                >
                    <ImageCircle source={require("../../../assets/Img/camera.png")} />

                </ButtonCamera>


                <ButtonReturn>
                    <ImageReturn source={require("../../../assets/Img/return.png")} />
                </ButtonReturn>

            </FooterCamera>


        </ContainerCamera>

    )
}

