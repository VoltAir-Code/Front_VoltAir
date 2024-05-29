import { Image } from "react-native"
import { ContainerTransparentMap } from "../Container/Style"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const MapHeader = () => {
    return (
        <>
            <ContainerTransparentMap>

                <AntDesign name="left" size={30} color="black" />
                <Ionicons name="notifications-outline" size={30} color="black" />

            </ContainerTransparentMap>
        </>
    )
}