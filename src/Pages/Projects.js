import React from "react";
import CardComp from "../Components/Card.js";
import { Carousel } from "react-bootstrap";
import projectsObj from "../utils/projectObjects.js";
import { StyledProject } from "../Components/styles/Project.styled.js"

const Projects = () => {
  return (
    <StyledProject>
      <div>
        <Carousel fade className="d-block w-50 m-auto h-auto">
          {projectsObj.map((item, index) => (
            <Carousel.Item>
              <CardComp key={index} item={item} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      </StyledProject>
  );
};

export default Projects;
