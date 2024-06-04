import { Image, Modal } from "react-native"
import { ModalContainer, ModalTransparent } from "./Style"
import { ButtonDefault } from "../Button/Button"
import { SubTitle, Title } from "../Title/Style"

export const ModalChargingStation = ({ visible }) => {
    return (
        <Modal visible={visible} transparent={true}>
            <ModalTransparent>
                <ModalContainer height={"396px"}>
                    <Image
                        source={require("../../../assets/Img/postoshell.jpg")}
                        style={{ width: "60%", height: 220, borderRadius: 10, resizeMode: "cover", position: "absolute", top: -75}}
                    />

                    <Title margin={"140px 0px 2px 0px"} color={"#FFFFFF"}> Posto Shell</Title>

                    <SubTitle margin={"0px 0px 50px 0px"} color={"#FFFFFF"}>Rua Niterói, 180 - São Caetano do Sul</SubTitle>

                    <ButtonDefault
                        margin={"0px 0px 50px 0px"}
                        height={"58px"}
                        text={"Traçar rota"}
                    />
                </ModalContainer>
            </ModalTransparent>
        </Modal>
    )
}