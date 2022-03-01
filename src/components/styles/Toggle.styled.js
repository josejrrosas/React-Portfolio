import styled from "styled-components";

export const ToggleStyle = styled.button `
    cursor: pointer;
    height:30px;
    width:30px;
    border-radius:50%;
    border:none;
    background-color: ${props => props.theme.wordColor};
    color: ${props => props.theme.baseColor};
    font-size:10px;
    /* margin:5px; */
    
    &:focus {
        outline: none;
    }
    transition: all .5s ease;

    &:hover{
         opacity: 0.7; 
    }
`;
