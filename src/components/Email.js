import React from "react";
import { Form, Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className= "d-flex flex-column align-items-center mt-5">
        <h2 className="h1"> Wanna Hire Me?</h2>
        <h2 className="h2">Get in Touch!</h2>
      </div>
      <Form className="d-flex flex-column align-items-center justify-content-center">
        <Form.Group
          className="w-50 border border-dark rounded p-3 pb-4 bg-primary"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Enter your Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group
          className="mt-3 w-50 border border-dark rounded p-3 pb-5 bg-primary"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Write your message...</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button className="m-3 mb-5" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Header;
