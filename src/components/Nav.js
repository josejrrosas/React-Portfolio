import React from 'react'
import { StyledNav ,StyledLink} from "./styles/Nav.styled"
const Nav = () => {
  return (
    <StyledNav>
        <ul>
            <li><StyledLink to ="/">Home</StyledLink></li>
            <li><StyledLink to ="/about">About</StyledLink></li>
            <li><StyledLink to ="/projects">Projects</StyledLink></li>
            <li><StyledLink to ="/contact">Contact</StyledLink></li>
        </ul>
    </StyledNav>
  )
}

export default Nav