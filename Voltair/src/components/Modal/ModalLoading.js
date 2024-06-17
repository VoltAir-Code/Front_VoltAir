import { Alert, Modal } from "react-native";
import { ButtonDefault, ButtonLoading, ImageBatery } from "../Button/Button"
import { SubTitle, TextLink, Title } from "../Title/Style"
import { BatteryPercentage, ModalContainer } from "./Style"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDecodeToken } from "../../utils/Auth";
import api from "../../services/Service";
import { useEffect, useState } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import * as Notifications from "expo-notifications";

const ModalLoading = ({
    navigation,
    visible,
    textLink,
    onClose,
    buttonText,
    setModalVisible,
    Percentage,
    title,
    buttonTextLoading,
    charging,
}) => {
    const [timer, setTimer] = useState(false)
    const [car, setCar] = useState({})
    const [idUser, setIdUser] = useState();
    const [battery, setBattery] = useState()
    const batteryCapacity = car.capacidade
    const [progressValue, setProgressValue] = useState(0);
    const [notificationScheduled, setNotificationScheduled] = useState(false);
    const [newBattery, setNewBattery] = useState(battery)

    useEffect(() => {
        InformationCar();
        LoadDataUser()
    }, [])

    useEffect(() => {
        setBattery(progressValue);
        if (progressValue >= 1 && !notificationScheduled) {
            setNotificationScheduled(true);
            scheduleNotification();
        }

    }, [progressValue]);


    useEffect(() => {
        UpdateTime();
    }, [newBattery])


    const UpdateTime = async (newValue) => {
        try {
            const response = await api.put(`Carro/AtualizarBateria?idUsuario=${idUser}`, {
                bateriaAtual: newBattery
            })
        } catch (error) {
            console.log(error);
        }
    }


    const LoadDataUser = async () => {
        const token = await useDecodeToken();

        const response = await api.get(`Carro/BuscarPorId?idUser=${token.id}`);
        setIdUser(token.id)
    }


    async function LoadingCar() {
        const intervalCharging = setInterval(() => {
            setProgressValue(prev => {
                const newValue = Math.min(1, prev + (1 / batteryCapacity));
                if (newValue >= 1) {
                    clearInterval(intervalCharging);
                    setTimer(false);
                }   
                setNewBattery(newValue);
                return newValue;
            });
        }, 1000);       
    }

    async function InformationCar() {
        const user = await useDecodeToken();

        api.get(`Carro/BuscarPorId?idUser=${user.id}`)
            .then(response => {
                console.log(response.data);
                setCar(response.data.idModeloNavigation)
                setBattery(response.data.bateriaAtual)
            }).catch(err => {

            })
    }

    const scheduleNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Bateria totalmente carregada',
                body: 'Seu carro está pronto para ser usado!',
            },
            trigger: null,
        });
    };

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <ModalContainer height={"45%"}>
                <Title color={"#FFFFFF"} margin={"20px 0px 0px 0px"}>
                    {title}
                </Title>

                <BatteryPercentage color={"#FFFFFF"} margin={"20px 0px 20px 0px"}>
                    {`${(battery * 100).toFixed(0)}%`}
                </BatteryPercentage>

                <ButtonLoading
                    text={timer ? LoadingCar() : `${buttonTextLoading}`}
                    height={"58px"}
                    margin={"10px 0px 10px 0px"}
                    onPress={() => { timer ? setTimer(false) : setTimer(true) }}
                />

                <ButtonDefault
                    text={`${buttonText}`}
                    height={"58px"}
                    margin={"0px 0px 10px 0px"}
                    onPress={() => onClose()}
                />

                <TextLink margin={"16px 0px 0px 0px"}>
                    {textLink}
                </TextLink>
            </ModalContainer>
        </Modal>
    )
}

export default ModalLoading;