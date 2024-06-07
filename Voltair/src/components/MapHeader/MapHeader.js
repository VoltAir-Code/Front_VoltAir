import { Image, TouchableOpacity } from "react-native"
import { ContainerTransparentMap } from "../Container/Style"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";


export const MapHeader = ({ navigation }) => {
    const [run, setRun] = useState(false)

    return (
        <>
            <ContainerTransparentMap>

                <TouchableOpacity onPress={() => { navigation.replace("Main") }}>
                    <AntDesign name="left" size={40} color="black" />
                </TouchableOpacity>

            </ContainerTransparentMap>
        </>
    )
}