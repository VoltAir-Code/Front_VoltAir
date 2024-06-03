import { Modal } from "react-native";
import { ButtonDefault, ButtonLoading } from "../Button/Button"
import { SubTitle, TextLink, Title } from "../Title/Style"
import { ModalContainer, ModalContent } from "./Style"

const ModalDefault = ({navigation, visible, textLink, onClose, buttonText, setModalVisible, title, subTitle, buttonTextLoading }) => {

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
        <ModalContainer>
            <ModalContent>
            <Title color={"#FFFFFF"} margin={"40px 0px 35px 0px"}>
                {title}
            </Title>

            <SubTitle color={"#FFFFFF"} margin={"0px 0px 40px 0px"}>
                {subTitle}
            </SubTitle>

            <ButtonDefault
                text={`${buttonText}`}
                height={"58px"}
                margin={"0px 0px 30px 0px"}
                onPress={() => onClose()}
            />

            <TextLink margin={"16px 0px 0px 0px"}>
                {textLink}
            </TextLink>
        </ModalContent>
        </ModalContainer>
        </Modal>
    )
}

export default ModalDefault;