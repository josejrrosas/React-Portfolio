import React from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { StyledCard } from "./styles/Card.styled";

const CardComp = ({
  item: { title, image, description, skills, github, deployedSite },
}) => {
  return (
    <StyledCard>
      <Card
        className="p-3 m-auto"
        border="secondary"
        bg="dark"
        style={{ width: "18rem", height: "fit-content" }}
        text="light"
      >
        <Card.Img style={{ height: "200px" }} variant="top" src={image} />
        <Card.Body style={{ height: "150" }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup style={{ height: "100" }} className="list-group-flush">
          <ListGroup.Item style={{ height: "100" }}>
            Skills used : {skills}
          </ListGroup.Item>
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
