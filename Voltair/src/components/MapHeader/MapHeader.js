import { Image, TouchableOpacity } from "react-native"
import { ContainerTransparentMap } from "../Container/Style"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";


export const MapHeader = ({ navigation, progressValue, setProgressValue }) => {
    const [run, setRun] = useState(false)
    return (
        <>
            <ContainerTransparentMap>

                <TouchableOpacity onPress={() => { navigation.replace("Main" , {progressValue: progressValue, setProgressValue: setProgressValue})}}>
                    <AntDesign name="left" size={40} color="black" />
                </TouchableOpacity>

            </ContainerTransparentMap>
        </>
    )
}