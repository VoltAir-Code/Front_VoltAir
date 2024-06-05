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

export const ButtonDefaultCircle = ({ text, icon, onPress }) => {
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
flex: 1;
width: 80px;
height: 80px;
border-radius: 100px;
background-color: #F2732E;
align-self: center;
margin-top: -10%;
bottom: 50px;
left: 40%;
position: absolute;
`
export const ButtonCamera = styled(ButtonMaps)`
`

export const ButtonReturn = styled.TouchableOpacity`
width: 80px;
height: 80px;
align-self: flex-end;
margin-right: 4%;
`

export const Provisorio = styled.View`
height: 85%;
width: 100%;
background-color: black;
`

export const ButtonGallery = styled.TouchableOpacity`
width: 54px;
height: 54px;
border-radius: 5px;
background-color: #F2732E;
align-self: center;
margin-left: 9%;
`
export const ImageGallery = styled.Image`
width: 100%; 
height: 100%;
`;

export const ImageReturn = styled.Image`
width: 70%;
height: 70%;
`

export const ImageMap = styled.Image`
width: 65%;
height: 65%;
align-self: center;
margin-top: 15%;
`

export const ImageRay = styled.Image`
height: 45%;
width: 45%;
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

// export const ButtonHome = styled.TouchableOpacity`
export const ButtonHome = styled.View`
border: 1px;
border-radius: 10px;
border-color: white;
margin-left: -30%;
width: 54px;
height: 54px;
`
export const ButtonProfile = styled(ButtonHome)`
margin-left: 0%;
margin-right: -30%;
`

export const ImageInput = styled.Image`
height: 30px;
width: 30px;
margin-top: -17%;
margin-left: 65%;
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


export const ButtonInput = styled.TouchableOpacity`

`