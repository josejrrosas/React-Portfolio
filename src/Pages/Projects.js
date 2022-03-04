import React from "react";
import CardComp from "../Components/Card.js";
import projectsObj from "../utils/projectObjects.js";
import { StyledProject } from "../Components/styles/Project.styled";

const Projects = () => {
  return (
    <StyledProject>
        {projectsObj.map((item, index) => (
          <CardComp key={index} item={item} />
        ))}
    </StyledProject>
  );
};

export default Projects;
