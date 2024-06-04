import { Modal } from "react-native"
import { ModalContainer, ModalTransparent } from "./Style"
import { Button } from "../Button/Style"
import { ButtonDefault } from "../Button/Button"
import { Title } from "../Title/Style"

export const ModalNotificationCharge = ({visible}) => {
    return (
        <Modal transparent={true} visible={visible}>
            <ModalTransparent>
                <ModalContainer height={"259px"}>
                    <Title
                        margin={"0px 0px 0px 0px"}
                        color={"#FFFFFF"}
                    >Está na hora de carregar seu carro!
                    </Title>
                    <ButtonDefault
                        
                        margin={"21px 0px 0px 0px"}
                        height={"58px"}
                        text={"Ver postos de Recarga"}
                    />
                </ModalContainer>
            </ModalTransparent>
        </Modal>
    )
}