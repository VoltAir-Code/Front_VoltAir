import { Modal } from "react-native";
import { ButtonDefault, ButtonLoading } from "../Button/Button"
import { SubTitle, TextLink, Title } from "../Title/Style"
import { ModalContainer} from "./Style"

const ModalOcr = ({
    navigation,
    visible,
    onClose,
    buttonText,
    buttonText2,
    title,
    onConfirm,
    subTitle,
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
                    onPress={() => onConfirm()}
                />

                <ButtonDefault
                    text={`${buttonText2}`}
                    height={"58px"}
                    margin={"0px 0px 50px 0px"}
                    onPress={() => onClose()}
                />
                
            </ModalContainer>
        </Modal>
    )
}

export default ModalOcr;