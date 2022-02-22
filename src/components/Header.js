import React from "react";
import { StyledHeader, Main } from "./styles/Header.styled";


const Header = () => {
  return (
    <StyledHeader>
      <Main>
        <div>
          <h1>My Name is Jose Rosas</h1>

          <p>
            I am a Software Developer from Dallas, Texas. I am excited to apply
            my passion for learning to bust into the Web-Dev industry! If I'm
            not studying, I am playing video games, exercising, or mindlessly
            watching youtube videos!
          </p>
        </div>
      </Main>
    </StyledHeader>
  );
};

export default Header;
