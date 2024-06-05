import React, { useCallback, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import Timer from "../Timer/Timer";
import { ButtonDefaultCircle } from "../Button/Button";
import { ContainerBlackMap } from "../Container/Style";
import { TextLink } from "../Title/Style";

export const MapFooter = () => {
    const [run, setRun] = useState(false);
    const [progressValue, setProgressValue] = useState(1);

    const onPress = useCallback(() => {
        setRun(!run);
        setProgressValue(0); // Reseta ou inicia o progresso
    }, [run]);

    return (
        <ContainerBlackMap height={"104px"} flexDirection={"row"} justifyContent={"space-between"}>
            <Timer progressValue={progressValue} />
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
               <Timer progressValue={progressValue} />
        </ContainerBlackMap>
    );
};
