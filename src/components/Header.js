import React from "react";
import { StyledHeader, Image } from "./styles/Header.styled";
import pic from "../images/Its Me.jpeg";

const Header = () => {
  return (
    <StyledHeader>
      <div id="self-image">
        <Image src={pic} alt="Jose Rosas" />
      </div>

      <div id="headerInfo">
        <h2>Jose Rosas,</h2>
        <h1>Aspiring Cybersecurity Professional </h1>
        <p>
          I am a dynamic mobile device administrator with a diverse background
          encompassing experience in business intelligence analysis. Certified
          in CompTIA Security+ and armed with a web development bootcamp
          certificate.
        </p>
      </div>
    </StyledHeader>
  );
};

export default Header;
