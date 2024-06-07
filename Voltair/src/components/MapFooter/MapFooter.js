import React, { useCallback, useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import Timer from "../Timer/Timer";
import { ButtonDefaultCircle } from "../Button/Button";
import { ContainerBlackMap } from "../Container/Style";
import { TextLink } from "../Title/Style";

export const MapFooter = () => {
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

        <ContainerBlackMap height={"104px"} flexDirection={"row"} justifyContent={"space-between"}>
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
    );
};
