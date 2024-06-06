import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import { ContainerCamera, ContainerHome, FooterCamera } from "../../components/Container/Style";
import { ButtonCamera, ButtonGallery, ButtonReturn, ImageCircle, ImageGallery, ImageReturn } from "../../components/Button/Button";
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import Svg, { Circle, Rect } from 'react-native-svg';
import CameraIcon from "../../components/icons/CameraIcon";



export const Camera = ({ navigation, route }) => {
    const cameraRef = useRef(null);
    const [photo, setPhoto] = useState(null);
    const [tipoCamera, setTipoCamera] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [flashMode, setFlashMode] = useState('off');
    const [autoFocus, setAutoFocus] = useState('off');
    const [lastedPhoto, setLastedPhoto] = useState(null);

    //   useEffect(() => {
    //       requestPermission();
    //       GetLastPhoto();
    //   }, []);


    //   async function CapturePhoto() {
    //       setAutoFocus(ExpoCamera.Constants.AutoFocus.on);
    //       await new Promise((resolve) => setTimeout(resolve, 1000));
    //       if (cameraRef.current) {
    //          const photo = await cameraRef.current.takePictureAsync({
    //              quality: 1,
    //           });
    //           setPhoto(photo.uri);
    // }
    //   }

     async function SelectImageGallery() {
         const result = await ImagePicker.launchImageLibraryAsync({
             mediaTypes: ImagePicker.MediaTypeOptions.Images,
             quality: 1,
        });

     if (!result.canceled) {
             setPhoto(result.uri);
        }
    }

    // async function GetLastPhoto() {
    //     const { assets } = await MediaLibrary.getAssetsAsync({
    //         sortBy: [[MediaLibrary.SortBy.creationTime, false]],
    //         first: 1,
    //     });

    //     if (assets.length > 0) {
    //         setLastedPhoto(assets[0].uri);
    //     }
    // }

    // function ToggleFlashMode() {
    //     setFlashMode(
    //         flashMode === ExpoCamera.Constants.FlashMode.on
    //             ? ExpoCamera.Constants.FlashMode.off
    //             : ExpoCamera.Constants.FlashMode.on,
    //     );
    // }

    // function toggleCameraFacing() {
    //     setTipoCamera(current => (current === ExpoCamera.Constants.Type.back ? ExpoCamera.Constants.Type.front : ExpoCamera.Constants.Type.back));
    // }


    return (
        <ContainerHome>
            <CameraView
                style={{ flex: 1 }}
                type={tipoCamera}
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
                    //  onPress={CapturePhoto}
                    >
                   <CameraIcon color={"#F2732E"} size={60} />
                    {/* <ImageCircle source={require("../../../assets/Img/camera.png")}/> */}
                    </ButtonCamera>


                    <ButtonReturn
                    >
                        <ImageReturn source={require("../../../assets/Img/return.png")} />
                    </ButtonReturn> 
                </FooterCamera>

        </ContainerHome>
    );
};
