import { useState } from "react";
import { ButtonDefaultCircle } from "../Button/Button"
import { ContainerBlackMap } from "../Container/Style"
import { Ionicons } from '@expo/vector-icons';

export const MapFooter = () => {
    const [run, setRun] = useState(false)
    return (
        <ContainerBlackMap flexDirection={"row"} justifyContent={"center"}>
            <ButtonDefaultCircle
                text={"Iniciar corrida"}
                icon={
                    run ?
                        <Ionicons name="stop" size={54} color="black" />
                        :
                        <Ionicons name="play" size={54} color="black" style={{ alignSelf: "center", marginLeft: 7 }} />
                }
                onPress={() => { run ? setRun(false) : setRun(true) }}
            />
        </ContainerBlackMap>
    )
}