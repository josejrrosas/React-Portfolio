import React from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import {StyledCard} from "./styles/Card.styled";

const CardComp = ({
  item: { title, description, skills, github, deployedSite },
}) => {
  return (
    <StyledCard>
      <Card
        border="secondary"
        bg="dark"
        style={{ width: "18rem", height: '400px' }}
        text="light"
      >
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Skills used : {skills}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">
            <a href={deployedSite}>Check it out!</a>
          </Card.Link>
          <Card.Link href="#">
            <a href={github}>Github Repo</a>
          </Card.Link>
        </Card.Body>
      </Card>
    </StyledCard>
  );
};

export default CardComp;
