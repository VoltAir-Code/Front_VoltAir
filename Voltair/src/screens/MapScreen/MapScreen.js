import { View } from "react-native"
import { ButtonDefaultCircle, ButtonDefaultSide } from "../../components/Button/Button"
import { ContainerBlackMap } from "../../components/Container/Style"
import { MapFooter } from "../../components/MapFooter/MapFooter"
import { MapHeader } from "../../components/MapHeader/MapHeader"
import Map from "../Map"

export const MapScreen = () => {
    return (
        <>
            <View style={{flex: 1}}>
                <MapHeader />

                <Map/>

                <MapFooter />
            </View>
        </>
    )
}