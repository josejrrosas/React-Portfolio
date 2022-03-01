import React from 'react'
import { StyledProject } from '../Components/styles/Project.styled'
import Card from "../Components/Card.js"
import projectsObj from "../utils/projectObjects.js"

const Projects = () => {
  return (
    <StyledProject>
      {projectsObj.map((item,index)=>(
            <Card key={index} item={item} />
          ))}
    </StyledProject>
  )
}

export default Projects