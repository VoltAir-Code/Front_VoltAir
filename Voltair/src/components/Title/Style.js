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

export const TextWarning = styled.Text`
    font-size: 14px;
    background-color: rgba(152, 33, 33, 0.9);
    color: ${props => `${props.color}`};
    font-family: "Poppins_400Regular";
    margin: ${props => `${props.margin}`};
    text-align: center;
    padding: 5px 10px;
    border-radius: 5px;
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

export const TextInput = styled.Text`
    font-size: 14px;
    color: #FFF;
    font-family: "Poppins_700Bold";
    margin: ${props => `${props.margin}`};
    align-items: flex-start;
    align-self: flex-start;
    justify-content: flex-start;
`
