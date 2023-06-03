import styled from "styled-components";

export const ToggleStyle = styled.button `
    cursor: pointer;
    /* border-radius:50%; */
    border:none;
    background-color: transparent;
    color: ${props => props.theme.wordColor};
    font-size:40px;
    /* margin:5px; */
    
    &:focus {
        outline: none;
    }

    &:hover{
         opacity: 0.7; 
    }
`;
