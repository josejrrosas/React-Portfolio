import React from "react";
import { StyledAbout, Logos, Image } from "../Components/styles/About.styled";
import Tab from "react-bootstrap/Tab";
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
                    I am an accomplished mobile device administrator with a
                    diverse professional background, including experience as a
                    business intelligence analyst. With a strong foundation in
                    mobile device management, I possess a keen understanding of
                    business processes and data analysis. Alongside my
                    expertise, I hold certifications in CompTIA Security+ and
                    have completed a web development bootcamp, demonstrating my
                    commitment to expanding my skill set. Currently, I am
                    actively seeking a new opportunity to leverage my combined
                    knowledge of mobile device administration, business
                    intelligence, and web development.
                  </p>
                  <p>
                    On my down time I often find myself searching for something
                    to learn on youtube or just going down random rabbit holes.
                    I tend to get lost in code whenever I find something I enjoy
                    coding. I also enjoy sports, staying active, and nature. I especially
                    enjoy baseball, lifting, and bowling!
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
