import styled from "styled-components";

export const Input = styled.TextInput.attrs({placeholderTextColot: 'rgba(49, 49, 49, 0.1922)'})`
    width: 81.67%;
    height: ${props => props.height};

    border: 1px solid #313131;
    border-radius: 5px;
    font-size: 12px;
    align-items: 'center';
    font-family: 'Poppins_700Bold'
`