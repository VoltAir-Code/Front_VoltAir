import styled from "styled-components";

export const Button = styled.TouchableOpacity` 
    width: 82.32%;
    height: ${props => `${props.height}`};
    background-color: #F2732E;
    border-radius: 10px;
    justify-content:center;
`

export const TextButton = styled.Text`
    color: #313131;
    font-size: 16px;
    font-family: "Poppins_700Bold";
    align-self: center;
`