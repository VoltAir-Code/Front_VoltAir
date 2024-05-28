import styled from "styled-components";

export const ContainerBlack = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #313131;
`

export const ContainerWhite = styled.SafeAreaView`
    align-items: center;
    background-color: #FFFFFF;
    height: ${props => `${props.height}`};
`