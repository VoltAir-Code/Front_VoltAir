import { SafeAreaView, View } from "react-native";
import { MapFooter } from "../../components/MapFooter/MapFooter";
import { MapHeader } from "../../components/MapHeader/MapHeader";
import Map from "../Map";
import { ModalNotificationCharge } from "../../components/Modal/ModalNotificationCharge";
import { useCallback, useEffect, useState } from "react";
import { ModalChargingStation } from "../../components/Modal/ModalChargingStation";
import { ContainerBlackMap } from "../../components/Container/Style";
import Timer from "../../components/Timer/Timer";
import { ButtonDefaultCircle } from "../../components/Button/Button";
import { Ionicons } from "@expo/vector-icons";
import api from "../../services/Service";
import * as Notifications from "expo-notifications";
import { useDecodeToken } from "../../utils/Auth";
import ModalLoading from "../../components/Modal/ModalLoading";
import { Card } from "../../components/Card/Card";


const requestNotificationPermissions = async () => {
    const token = await useDecodeToken();
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
        alert('Permissão de notificação está desativada');
    }
};

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export const MapScreen = ({ navigation }) => {
    const [chargingStation, setChargingStation] = useState(false);
    const [getDirection, setGetDirection] = useState(false);
    const [run, setRun] = useState(false);
    const [exibiu, setExibiu] = useState(false);
    const [progressValue, setProgressValue] = useState(1);
    const duration = 15000;

    const handleNotifications = async () => {
        const { status } = await Notifications.getPermissionsAsync();

        if (status !== 'granted') {
            alert('Permissão de notificação está desativada');
            return;
        }

        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Nível de Bateria baixo',
                body: 'É necessário carregar o automóvel',
                sound: true,
            },
            trigger: { seconds: 1 },
        });
    };

    const onPress = useCallback(() => {
        setRun(!run);
    }, [run]);

    useEffect(() => {
        let interval;
        if (run) {
            interval = setInterval(() => {
                setProgressValue(prev => {
                    const newValue = Math.max(0, prev - (1000 / duration));
                    const percentage = newValue * 100;

                    if (percentage < 16 && !exibiu) {
                        setExibiu(true);
                        handleNotifications();
                        setChargingStation(true);
                        setRun(false); // Stop the timer when notification is triggered
                    }
                    return newValue;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [run, exibiu]);




      useEffect(() => {
        requestNotificationPermissions();

    }, []);


    const timeRemaining = duration * progressValue;

    return (
        <>
            <View style={{ flex: 1 }}>
                <MapHeader navigation={navigation} progressValue={progressValue} />
                <Map getDirection={getDirection} />
                <ContainerBlackMap height={"104px"} flexDirection={"row"} justifyContent={"space-between"} >
                    <Timer key={Math.random()} progressValue={progressValue} />
                    <ButtonDefaultCircle
                        text={run ? "Parar corrida" : "Iniciar corrida"}
                        icon={
                            run ?
                                <Ionicons name="stop" size={54} color="black" />
                                :
                                <Ionicons name="play" size={54} color="black" style={{ alignSelf: "center", marginLeft: 7 }} />
                        }
                        onPress={onPress}
                    />
                    <Timer key={Math.random()} progressValue={progressValue} timeRemaining={timeRemaining} duration={duration} />
                </ContainerBlackMap>
                <ModalChargingStation
                    visible={chargingStation}
                    setChargingStation={setChargingStation}
                    setGetDirection={setGetDirection}
                />

            </View>

        </>
    );
};
