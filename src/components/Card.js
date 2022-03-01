import React from "react";
import { StyledCard } from "./styles/Card.styled";

const Card = ({
  item: { title, description, skills, github, deployedSite },
}) => {
  return (
    <StyledCard>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{skills}</p>
      <p>{github}</p>
    </StyledCard>
  );
};

export default Card;
