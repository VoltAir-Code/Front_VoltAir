import { SafeAreaView, View } from "react-native"
import { ButtonDefaultCircle, ButtonDefaultSide } from "../../components/Button/Button"
import { ContainerBlackMap } from "../../components/Container/Style"
import { MapFooter } from "../../components/MapFooter/MapFooter"
import { MapHeader } from "../../components/MapHeader/MapHeader"
import Map from "../Map"
import { ModalNotificationCharge } from "../../components/Modal/ModalNotificationCharge"
import { useCallback, useState } from "react"
import { ModalChargingStation } from "../../components/Modal/ModalChargingStation"

export const MapScreen = ({ navigation }) => {
    const [notificationCharge, setNotificationCharge] = useState(false)
    const [chargingStation, setChargingStation] = useState(false)
    const [run, setRun] = useState(false);
    const [progressValue, setProgressValue] = useState(1);
    const duration = 600000;
  

    const onPress = useCallback(() => {
        setRun(!run);
    }, [run]);

    useEffect(() => {
        let interval;
        if (run) {
            interval = setInterval(() => {
                setProgressValue(prev => {
                    const newValue = Math.max(0, prev - (1000 / duration)); 
                    return newValue;
                });
 
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [run]);


    const timeRemaining = duration * progressValue;

    return (
        <>
            <View style={{ flex: 1 }}>
                <MapHeader navigation={navigation} />

                <Map />

                <MapFooter />
            </View>

            <ModalNotificationCharge
                visible={notificationCharge}
            />

            <ModalChargingStation
                visible={chargingStation}
            />
        </>
    )
}