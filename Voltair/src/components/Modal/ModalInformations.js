import { Modal } from "react-native";
import { ButtonDefault, ButtonLoading, ImageBatery } from "../Button/Button"
import { SubTitle, TextLink, Title } from "../Title/Style"
import { ModalContainer } from "./Style"

const ModalInformations = ({ navigation, visible, textLink, onClose, buttonText, setModalVisible, title, subTitle,
    buttonTextLoading, information1, answer1, information2, answer2, answer21, information3, answer3 }) => {

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <ModalContainer height={"45%"}>

                <Title color={"#FFFFFF"} margin={"0px 0px 0px 0px"}>
                    {information1}
                </Title>

                <SubTitle color={"#FFFFFF"} margin={"0px 0px 15px 0px"}>
                    {answer1}
                </SubTitle>

                <Title color={"#FFFFFF"} margin={"0px 0px 0px 0px"}>
                    {information2}
                </Title>

                <SubTitle color={"#FFFFFF"} margin={"0px 0px 0px 0px"}>
                    {answer2}
                </SubTitle>
                <SubTitle color={"#FFFFFF"} margin={"0px 0px 15px 0px"}>
                    {answer21}
                </SubTitle>

                <Title color={"#FFFFFF"} margin={"0px 0px 0px 0px"}>
                    {information3}
                </Title>

                <SubTitle color={"#FFFFFF"} margin={"0px 0px 15px 0px"}>
                    {answer3}
                </SubTitle>

                <ButtonDefault
                    text={`${buttonText}`}
                    height={"58px"}
                    margin={"0px 0px 0px 0px"}
                    onPress={() => onClose()}
                />

            </ModalContainer>

        </Modal>

    )
}

export default ModalInformations;