import styled from "styled-components";

export const InputWhite = styled.TextInput.attrs({placeholderTextColor: 'rgba(49, 49, 49, 0.1922)'})`
    width: 81.67%;
    color: rgba(49, 49, 49, 0.5);
    height: ${props => `${props.height}`};
    margin: ${props => `${props.margin}`};
    border: 1px solid #313131;
    border-radius: 5px;
    font-size: 13px;
    text-align: justify;
    padding: 16px;
    font-family: 'Poppins_400Regular';
`

export const InputBlack = styled(InputWhite).attrs({placeholderTextColor: '#FFFFFF'})`
    border: 1px solid #F2732E;
    color: #FFFFFF;
`

export const InputVerify = styled(InputWhite)`
    width: 18.60%;
`

export const InputLabel = styled.Text`
    color: #313131;
    font-size: 14px;
    font-family: "Poppins_700Bold";
`

export const ViewInput = styled.View`
height: min-content;
width: 100%;
align-items: center;
/* border: 1px solid white; */
`
