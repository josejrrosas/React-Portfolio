import React from "react";
import { StyledAbout, Logos, Image } from "../Components/styles/About.styled";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiBootstrap,
  SiMongodb,
  SiGit,
  SiMysql,
} from "react-icons/si";

import Smu from "../images/smu horse.png";
import Uta from "../images/uta horse.png";

const About = () => {
  return (
    <StyledAbout>
      <div id="about">
        <h1>Hello!</h1>
      </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="about">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="education">Education</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="skills">Skills</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="about">
                <div id="about">
                  <p>
                    My name is Jose Rosas. I am a Web Developer from Dallas,
                    Texas. I am excited to apply my passion for learning to bust
                    into the Web-Dev industry! If I'm not studying, I am
                    exercising, playing video games , or mindlessly watching
                    youtube videos!
                  </p>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="education">
                <div id="education">
                  <div>
                    <h3>Southern Methodist University</h3>
                    <p>Full-Stack Web Development Certificate</p>

                    <h3>University of Texas at Arlington</h3>
                    <p>Bachelors of Science in Information Systems</p>
                  </div>

                  <div>
                    <Image src={Uta} alt="Jose Rosas" />
                    <Image src={Smu} alt="Jose Rosas" />
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="skills">
                <div id="skills">
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
                      <li>
                        <SiReact />
                        <p>React</p>
                      </li>
                      <li>
                        <SiNodedotjs />
                        <p>NodeJs</p>
                      </li>
                      <li>
                        <SiBootstrap />
                        <p>Bootstrap</p>
                      </li>
                      <li>
                        <SiMongodb />
                        <p>MongoDB</p>
                      </li>
                      <li>
                        <SiGit />
                        <p>Git</p>
                      </li>
                      <li>
                        <SiMysql />
                        <p>MySql</p>
                      </li>
                    </ul>
                  </Logos>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </StyledAbout>
  );
};

export default About;
