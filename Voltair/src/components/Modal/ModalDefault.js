import { Modal, TouchableOpacity } from "react-native";
import { ButtonDefault, ButtonLoading } from "../Button/Button"
import { SubTitle, TextLink, TextLinkModal, Title } from "../Title/Style"
import { ModalContainer} from "./Style"

const ModalDefault = ({
    navigation,
    visible,
    onClose,
    buttonText,
    title,
    subTitle,
    setModalVisible,
    height }) => {

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <ModalContainer height={height}>

                <Title color={"#FFFFFF"} margin={"40px 0px 35px 0px"}>
                    {title}
                </Title>

                <SubTitle color={"#FFFFFF"} margin={"0px 15px 40px 15px"}>
                    {subTitle}
                </SubTitle>

                <ButtonDefault
                    text={`${buttonText}`}
                    height={"58px"}
                    margin={"0px 0px 30px 0px"}
                    onPress={() => onClose()}
                />
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <TextLinkModal   margin={"0px 0px 0px 0px"}>Voltar</TextLinkModal>
                </TouchableOpacity>
                
            </ModalContainer>
        </Modal>
    )
}

export default ModalDefault;