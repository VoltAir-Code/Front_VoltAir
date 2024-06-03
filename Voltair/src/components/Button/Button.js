import { Image, StyleSheet, View } from "react-native"
import { Button, ButtonCircleFooter, ButtonSideFooter, ContentDefaultButtonCircle, TextButton } from "./Style"
import { TextBtnFooter, TextLink } from "../Title/Style"
import styled from "styled-components"

export const ButtonLoading = ({ text, height, margin, onPress }) => {
    return (
        <Button style={styles.ButtonModal} height={height} margin={margin} onPress={onPress}>
            <TextButton style={styles.TextModal}>{text}</TextButton>
        </Button>
    )
}

export const ButtonDefault = ({ text, height, margin, onPress }) => {
    return (
        <Button height={height} margin={margin} onPress={onPress}>
            <TextButton>{text}</TextButton>
        </Button>
    )
}

export const ButtonDefaultCircle = ({ source, text, icon, onPress }) => {
    return (
        <ContentDefaultButtonCircle>
            <ButtonCircleFooter onPress={onPress}>
                {icon}
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

export const ButtonMaps = styled.TouchableOpacity`
width: 80px;
height: 80px;
border-radius: 100px;
background-color: #F2732E;
align-self: center;
margin-top: -25%;
`

export const ImageMap = styled.Image`
width: 65%;
height: 65%;
align-self: center;
margin-top: 15%;
`

export const ImageRay = styled.Image`
height: 45%;
width: 40%;
align-self: center;
margin-top: 25%;
`
export const ImageBatery = styled.Image`
width: 100px;
height: 100px;
margin-top: -10%;
` 
export const ImageCar = styled.Image`
width: 50%;
height: 50%;
align-self:center;
margin-top: 25%;
` 

export const ButtonHome = styled.TouchableOpacity`
border: 1px;
border-radius: 10px;
border-color: white;
width: 54px;
height: 54px;
margin-left: 5%;
margin-top: -5%;
`
export const ButtonProfile = styled(ButtonHome)`
margin-left: 0%;
`


const styles = StyleSheet.create({
    ButtonModal: {
        borderColor: '#F2732E',
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    TextModal: {
        color: 'white'
    },
});
