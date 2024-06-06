import React, { useCallback, useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import Timer from "../Timer/Timer";
import { ButtonDefaultCircle } from "../Button/Button";
import { ContainerBlackMap } from "../Container/Style";
import { TextLink } from "../Title/Style";

export const MapFooter = () => {
    const [run, setRun] = useState(false);
    const [progressValue, setProgressValue] = useState(1);
    const duration = 2000;
    const updatesPerSecond = 100;
    const intervalTime = duration / updatesPerSecond;

    const onPress = useCallback(() => {
        setRun(!run);
    }, [run]);

useEffect(() => {
    let interval;
    if (run) {
        interval = setInterval(() => {
            setProgressValue(prev => {
                const newValue = prev - 0.01;
                return newValue <= 0 ? 0 : newValue;
            });
       
        }, intervalTime);
    } else {
        clearInterval(interval)
    }

    return () => clearInterval(interval);
},[run,progressValue,updatesPerSecond])
    return (
        <ContainerBlackMap height={"104px"} flexDirection={"row"} justifyContent={"space-between"}>
            <Timer key={`${progressValue}`} progressValue={progressValue} />
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
               <Timer key={Math.random()} progressValue={progressValue}  />
        </ContainerBlackMap>
    );
};
