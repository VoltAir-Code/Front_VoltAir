import styled from "styled-components";

export const ModalContainer = styled.View`
height:${props => `${props.height}`};
margin-top: auto;
align-items:center;
justify-content:center;
display: flex;

border-radius: 12px 12px 0px 0px;
background-color: #313131;
box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.25);
`
export const ModalContainerHome = styled(ModalContainer)`
height:45%;
`

export const ModalContent = styled.View`
    width: 80%;
    height: 390px;
    align-items:center;
    justify-content:center;
`
export const ModalTransparent = styled.View` 
    flex: 1;
    background-color: rgba(0, 0, 0, 0.3);
`