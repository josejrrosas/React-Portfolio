import React from "react";
import { StyledHeader, Nav } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </Nav>

      <div>
        <h1>My Name is Jose Rosas</h1>

        <p>
          I am a Software Developer from Dallas, Texas. I am excited to apply my
          passion for learning to bust into the Web-Dev industry! If I'm not
          studying, I am playing video games, exercising, or mindlessly watching
          youtube videos!
        </p>
      </div>
    </StyledHeader>
  );
};

export default Header;
