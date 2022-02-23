import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
    display:flex;
    align-items:center;
    margin:-2% auto;
    font-family: 'Open Sans', sans-serif;
    font-weight: bolder;
    margin-bottom:2%;

    ul {
        display: inline-flex;
        justify-content: space-evenly;
        margin: 0px auto;
        width: 90vw;
    }
 
    ul li {        
        list-style: none;
    }
`
export const StyledLink = styled(Link)`
  color: ${({theme}) => theme.wordColor};
  text-decoration: none;
`;