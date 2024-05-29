import { ButtonDefaultCircle } from "../Button/Button"
import { ContainerBlackMap } from "../Container/Style"

export const MapFooter = () => {
    return(
        <ContainerBlackMap flexDirection={"row"} justifyContent={"center"}>
            <ButtonDefaultCircle
                text={"Iniciar corrida"}
                source={require("../../../assets/Img/Play.png")}
            />
        </ContainerBlackMap>
    )
}