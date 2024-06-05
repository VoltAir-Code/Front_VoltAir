import { SafeAreaView, View } from "react-native"
import { ButtonDefaultCircle, ButtonDefaultSide } from "../../components/Button/Button"
import { ContainerBlackMap } from "../../components/Container/Style"
import { MapFooter } from "../../components/MapFooter/MapFooter"
import { MapHeader } from "../../components/MapHeader/MapHeader"
import Map from "../Map"
import { ModalNotificationCharge } from "../../components/Modal/ModalNotificationCharge"
import { useState } from "react"
import { ModalChargingStation } from "../../components/Modal/ModalChargingStation"

export const MapScreen = ({ navigation }) => {
    const [notificationCharge, setNotificationCharge] = useState(false)
    const [chargingStation, setChargingStation] = useState(false)

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