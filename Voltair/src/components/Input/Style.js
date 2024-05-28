import styled from "styled-components";

export const InputWhite = styled.TextInput.attrs({placeholderTextColot: 'rgba(49, 49, 49, 0.1922)'})`
    width: 81.67%;
    height: ${props => `${props.height}`};

    border: 1px solid #313131;
    border-radius: 5px;
    font-size: 13px;
    align-items: 'center';
    padding: 16px 113px;
    font-family: 'Poppins_700Bold';
`

export const InputBlack = styled(InputWhite).attrs({placeholderTextColot: '#FFFFFF'})`
    border: 1px solid #F2732E;
`

export const InputLabel = styled.Text`
    color: #313131;
    font-size: 14px;
    font-family: "Poppins_700Bold";
`