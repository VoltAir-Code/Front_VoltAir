import { useEffect, useState } from "react";
import { useDecodeToken } from "../../utils/Auth";
import { ContainerBack, TextCar, TextName } from "./Style";
export const Header = () =>{
    const [userName, setUserName] = useState('')

    async function profileLoad() {
        const token = await useDecodeToken();
        setUserName(token.name)
    }

    useEffect(() => {
        profileLoad()
    },[])
    return(
        <ContainerBack>
            <TextName>
                Olá, {userName}
            </TextName>
            <TextCar>
                Dolphin Mini
            </TextCar>
        </ContainerBack>
    )
}