import React from "react";
import { StyledHeader, Image } from "./styles/Header.styled";
import pic from "../images/Its Me.jpeg"

const Header = () => {
  return (
    <StyledHeader>
       <Image src={pic} alt=''/>  

        <div id="headerInfo">
          <h1>Jose Rosas,</h1>
          <h2>web developer</h2>
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
