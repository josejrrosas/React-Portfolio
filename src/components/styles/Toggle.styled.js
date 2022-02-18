import styled from "styled-components";

export const ToggleStyle = styled.button `
    cursor: pointer;
    height:50px;
    width:50px;
    border-radius:50%;
    border:none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};

    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;
