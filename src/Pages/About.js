import React from "react";
import { StyledAbout, Logos } from "../Components/styles/About.styled";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

const About = () => {
  return (
    <StyledAbout>
      <div id="about">
        <h1>Hello!</h1>
        <p>
          My name is Jose Rosas. I am a Web Developer from Dallas, Texas. I am
          excited to apply my passion for learning to bust into the Web-Dev
          industry! If I'm not studying, I am exercising, playing video games ,
          or mindlessly watching youtube videos!
        </p>
      </div>

      <div id="education">
        <h2>Education</h2>
        <h3>Southern Methodist University</h3>
        <p>Full-Stack Web Development Certificate</p>

        <h3>University of Texas at Arlington</h3>
        <p>Bachelors of Science in Information Systems</p>
      </div>

      <div id="skills">
        <h2>Skills</h2>
        <h3>
          Experience in many in-demand Web Development technologies!
        </h3>
        <Logos>
          <ul id="logos">
            <li>
              <SiHtml5 />
              <p>HTML</p>
            </li>
            <li>
              <SiCss3 />
              <p>CSS</p>
            </li>
            <li>
              <SiJavascript />
              <p>Javascript</p>
            </li>
          </ul>
        </Logos>
      </div>
    </StyledAbout>
  );
};

export default About;
