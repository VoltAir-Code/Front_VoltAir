import { Alert, Modal } from "react-native";
import { ButtonDefault, ButtonLoading, ImageBatery } from "../Button/Button";
import { SubTitle, TextLink, Title } from "../Title/Style";
import { BatteryPercentage, ModalContainer } from "./Style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDecodeToken } from "../../utils/Auth";
import api from "../../services/Service";
import { useEffect, useState } from "react";
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
    const [intervalId, setIntervalId] = useState(null);
    const [idUser, setIdUser] = useState();
    const [battery, setBattery] = useState()
    const [progressValue, setProgressValue] = useState(0);
    const [notificationScheduled, setNotificationScheduled] = useState(false);
    const [newBattery, setNewBattery] = useState(battery);
    let batteryCapacity = car?.capacidade || 1;

    useEffect(() => {
        InformationCar();
        LoadDataUser();
    }, []);

    useEffect(() => {
        if (progressValue !== undefined && !isNaN(progressValue)) {
            setBattery(progressValue);
        }
    }, [progressValue]);

    useEffect(() => {
        if (newBattery !== undefined && !isNaN(newBattery)) {
            UpdateTime();
        }

        if (newBattery >= 1 && !notificationScheduled) {
            setNotificationScheduled(true);
                scheduleNotification();
        }
    }, [newBattery]);

    const UpdateTime = async (newValue) => {
        try {
            console.log(idUser);
            const response = await api.put(`Carro/AtualizarBateria?idUsuario=${idUser}`, {
                bateriaAtual: newBattery,
            });
        } catch (error) {
            console.log("ATUALIZAR A BATERIA");
            console.log(error);
        }
    };

    const LoadDataUser = async () => {
        try {
            const token = await useDecodeToken();
        const response = await api.get(`Carro/BuscarPorId?idUser=${token.id}`);
        setIdUser(token.id);
        } catch (error) {
            console.log("LOADDATAUSER");
        }
        
    };

    async function LoadingCar() {
        const increment = 1 / (batteryCapacity || 1);
        const initialValue = battery || 0;
        let currentValue = initialValue;

        const id = setInterval(() => {
            setProgressValue(prev => {
                currentValue = Math.min(1, currentValue + increment);
                if (currentValue >= 1) {
                    clearInterval(id);
                    setTimer(false);
                    setIntervalId(null);
                }
                setNewBattery(currentValue);
                return currentValue;
            });
        }, 1000);
        setIntervalId(id);
    }

    async function InformationCar() {
        const user = await useDecodeToken();

        api.get(`Carro/BuscarPorId?idUser=${user.id}`)
            .then(response => {
                console.log(response.data);
                const carData = response.data.idModeloNavigation;
                const initialBattery = response.data.bateriaAtual;
                setCar(carData);
                setBattery(initialBattery);
                setProgressValue(initialBattery);
            }).catch(err => {
                console.log("INFORMATIONCAR");
                console.log(err);
            });
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
                    text={timer ? "Carregando..." : `${buttonTextLoading}`}
                    height={"58px"}
                    margin={"10px 0px 10px 0px"}
                    onPress={() => {
                        if (!timer) {
                            setTimer(true);
                            LoadingCar();
                        } else {
                            setTimer(false);
                            if (intervalId) {
                                clearInterval(intervalId);
                                setIntervalId(null);
                            }
                        }
                    }}
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
    );
}

export default ModalLoading;