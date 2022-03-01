import React from "react";
import { StyledHeader, Image } from "./styles/Header.styled";
import pic from "../images/Its Me.jpeg"

const Header = () => {
  return (
    <StyledHeader>
      <div id = "self-image">
        <Image src={pic} alt='Jose Rosas'/>  
      </div>

        <div id="headerInfo">
          <h2>Jose Rosas,</h2>
          <h1>web developer</h1>
          <p>
            I’m a Web Developer based in Dallas, Texas. My goal is to become
            proficient using the MERN stack. Developing applications for the
            web has become my drive.
          </p>
        </div>
    </StyledHeader>
  );
};

export default Header;
