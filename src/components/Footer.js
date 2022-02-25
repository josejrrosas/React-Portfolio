import ReactDOM from "react-dom";
import { StyledFooter, StyledSocialIcons } from "./styles/Footer.styled.js";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialIcons>
          <li>
            <a href="https://twitter.com/JoseRosas_Jr">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/josejrrosas">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joselrosasjr/">
              <FaLinkedin />
            </a>
          </li>
      </StyledSocialIcons>
    </StyledFooter>
  );
};

export default Footer;
