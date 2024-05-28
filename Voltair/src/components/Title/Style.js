import styled from "styled-components";

export const Title = styled.Text`
    font-size: 16px;
    color: #313131;
    font-family: "Poppins_700Bold";
    margin-bottom: 34px; 
`

export const SubTitle = styled.Text`
    font-size: 16px;
    color: #5F5C6B;
    font-family: "Poppins_400Regular";
    margin-top: ${props => `${props.marginTop}`};
    text-align: center;
`

export const TextLink = styled.Text`
    font-size: 14px;
    color: #313131;
    font-family: "Poppins_400Regular";
    margin-top: ${props => `${props.marginTop}`};
    text-align: center;
`