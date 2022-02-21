import styled from "styled-components";

export const ToggleStyle = styled.button `
    cursor: pointer;
    height:30px;
    width:30px;
    border-radius:50%;
    border:none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    font-size:10px;
    
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;
