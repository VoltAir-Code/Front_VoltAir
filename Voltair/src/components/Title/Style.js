import styled from "styled-components";

export const Title = styled.Text`
    font-size: 16px;
    color: ${props => `${props.color}`};
    font-family: "Poppins_700Bold";
    margin: ${props => `${props.margin}`}; 
    text-align: center;
`

export const SubTitle = styled.Text`
    font-size: 16px;
    color: ${props => `${props.color}`};
    font-family: "Poppins_400Regular";
    margin: ${props => `${props.margin}`};
    text-align: center;
    
`

export const TextLink = styled.Text`
    font-size: 14px;
    color: #313131;
    font-family: "Poppins_400Regular";
    margin: ${props => `${props.margin}`};
`
export const TextBtnFooter = styled(TextLink)`
    color: #FFFFFF;
`
