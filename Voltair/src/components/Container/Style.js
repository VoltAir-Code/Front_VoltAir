import styled from "styled-components";

export const ContainerBlack = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #313131;
    flex-direction: column;
    justify-content: flex-end;
`

export const ContainerHome = styled.SafeAreaView`
flex: 1;
`

export const ContainerWhite = styled.SafeAreaView`
    align-items: center;
    background-color: #FFFFFF;
    height: ${props => `${props.height}`};
    width: 100%;
    border-radius: 16px 16px 0px 0px;
`

export const ContainerBlackMap = styled(ContainerBlack)`
    flex: none;
    height: 104px;
    border-radius: 10px 10px 0px 0px;
    flex-direction: ${props => `${props.flexDirection}`};
    justify-content: ${props => `${props.justifyContent}`};
`
export const ContainerTransparentMap = styled.View`
    height: 96px;
    width: 100%;
    padding: 0px 8px 0px 8px;
    background-color: rgba(251, 244, 244, 0.6);

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 1;
    align-self: flex-start;
`
export const ContainerBlackHome = styled.SafeAreaView`
height: 15%;
width: 100%;
background-color: #313131;
border-radius: 10px 10px 0px 0px;
flex-direction: row;
align-items: center;
gap: 80px;
`