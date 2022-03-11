import React from "react";
import CardComp from "../Components/Card.js";
import { Carousel } from "react-bootstrap";
import projectsObj from "../utils/projectObjects.js";

const Projects = () => {
  return (
      <Carousel fade className="d-block w-50 m-auto">
        {projectsObj.map((item, index) => (
          <Carousel.Item>
            <CardComp key={index} item={item} />
          </Carousel.Item>
        ))}
      </Carousel>
  );
};

export default Projects;
