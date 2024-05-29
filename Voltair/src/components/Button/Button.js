import { Image, View } from "react-native"
import { Button, ButtonCircleFooter, ButtonSideFooter, ContentDefaultButtonCircle, TextButton } from "./Style"
import { TextBtnFooter, TextLink } from "../Title/Style"


export const ButtonDefault = ({ text, height, margin, onPress }) => {
    return (
        <Button height={height} margin={margin} onPress={onPress}>
            <TextButton>{text}</TextButton>
        </Button>
    )
}

export const ButtonDefaultCircle = ({ source, text }) => {
    return (
        <ContentDefaultButtonCircle>
            <ButtonCircleFooter>
                <Image source={source}/>
            </ButtonCircleFooter>

            <TextBtnFooter margin={"0px 0px 10px 0px"}>{text}</TextBtnFooter>
        </ContentDefaultButtonCircle>
    )
}

export const ButtonDefaultSide = () => {
    return (
        <>
            <ButtonSideFooter>

            </ButtonSideFooter>
        </>
    )
}