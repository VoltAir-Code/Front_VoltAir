import styled from "styled-components";

export const Button = styled.TouchableOpacity` 
    width: 82.32%;
    height: ${props => `${props.height}`};
    background-color: #F2732E;
    border-radius: 10px;
    justify-content:center;
    margin: ${props => `${props.margin}`};
`

export const TextButton = styled.Text`
    color: #313131;
    font-size: 16px;
    font-family: "Poppins_700Bold";
    align-self: center;
`

export const ButtonCircleFooter = styled.TouchableOpacity`
    height: 80px;
    width:80px;
    background-color: #F2732E;
    border-radius: 100px;
    position: absolute;
    margin: 0px 0px 0px 0px;
    bottom: 35px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const ButtonSideFooter = styled.TouchableOpacity`
    height: 54.17px;
    width: 12.59%;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
`

export const ButtonLogOut = styled.TouchableOpacity`
    height: 53px;
    width: 82.32%;
    border: 1px solid #F2732E;
    border-radius: 10px;
    justify-content:center;
    align-items: center;
    margin: ${props => `${props.margin}`};
`

export const ContentDefaultButtonCircle = styled.View`
    width: 100%;
    height: 100%;
    
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

