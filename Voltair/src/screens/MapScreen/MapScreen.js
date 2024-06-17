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
    const [progressValue, setProgressValue] = useState();
    const [dataCar, setDataCar] = useState();
    const [idUser, setIdUser] = useState();


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

    const [duration, setDuration] = useState();








 

    const onPress = useCallback(() => {
        setRun(!run);
    }, [run]);

    const LoadDataUser = async () => {
        const token = await useDecodeToken();

        const response = await api.get(`Carro/BuscarPorId?idUser=${token.id}`);
        setIdUser(token.id)

        const bateriaAtual = response.data.bateriaAtual
        const durBateria = new Date(response.data.idModeloNavigation.durBateria)

        console.log(durBateria);
        setProgressValue(bateriaAtual)
        const hours = durBateria.getHours();
        const minutes = durBateria.getMinutes();
        const seconds = durBateria.getSeconds();

        const durationInMiliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;

        setDuration(durationInMiliseconds * bateriaAtual)


    }

    const UpdateTime = async (newValue) => {
LoadDataUser();
        try {
            const response = await api.put(`Carro/AtualizarBateria?idUsuario=${idUser}`, {
                bateriaAtual: newValue
            })
        } catch (error) {
            console.log(error);
        }


    }

    useEffect(() => {
LoadDataUser();
    },[])

    useEffect(() => {

        let interval;
        if (run) {
            interval = setInterval(() => {
                setProgressValue(prev => {
                    const newValue = Math.max(0, prev - (1000 / duration));
                    const percentage = newValue * 100;

                    UpdateTime(newValue);
                    
                    if (percentage < 16 && !exibiu) {
                        setExibiu(true);
                        handleNotifications();
                        setChargingStation(true);
                        setRun(false);
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
                <MapHeader navigation={navigation} progressValue={progressValue} setProgressValue={setProgressValue} />
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
