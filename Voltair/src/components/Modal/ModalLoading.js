import { Modal } from "react-native";
import { ButtonDefault, ButtonLoading, ImageBatery } from "../Button/Button"
import { SubTitle, TextLink, Title } from "../Title/Style"
import { BatteryPercentage, ModalContainer } from "./Style"

const ModalLoading = ({ navigation, visible, textLink, onClose, buttonText, setModalVisible, Percentage, title, buttonTextLoading }) => {

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <ModalContainer  height={"45%"}>
                    <Title color={"#FFFFFF"} margin={"20px 0px 0px 0px"}>
                        {title}
                    </Title>

                    <BatteryPercentage color={"#FFFFFF"} margin={"20px 0px 20px 0px"}>
                        {`${(Percentage * 100).toFixed(0)}%`}
                    </BatteryPercentage>

                    <ButtonLoading
                        text={`${buttonTextLoading}`}
                        height={"58px"}
                        margin={"10px 0px 10px 0px"}
                        onPress={() => onClose()}
                    />

                    <ButtonDefault
                        text={`${buttonText}`}
                        height={"58px"}
                        margin={"0px 0px 10px 0px"}
                        onPress={() => onClose()}
                    />

                    <TextLink margin={"16px 0px 0px 0px"}>
                        {textLink}
                    </TextLink>
            </ModalContainer>
        </Modal>
    )
}

export default ModalLoading;