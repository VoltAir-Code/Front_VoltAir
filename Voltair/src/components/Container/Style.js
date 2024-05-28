import styled from "styled-components";

export const ContainerBlack = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #313131;
    flex-direction: column;
    justify-content: flex-end;
`

export const ContainerWhite = styled.SafeAreaView`
    align-items: center;
    background-color: #FFFFFF;
    height: ${props => `${props.height}`};
    width: 100%;
    border-radius: 10px 10px 0px 0px;
`