import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button } from "react-bootstrap";

import HeaderComp from "../components/Header";

import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Contact V2"};
  }
  shouldComponentUpdate() {
    return true;
  }
  changeTitle = () =>{
    this.setState({title: "Contact V3"});
  }
  render() {
    return (
      <Container>
        <Row>
          <Col lg="6">
            <HeaderComp title={this.state.title}> </HeaderComp>{" "}
            <button variant="info" onClick={this.changeTitle}>Refresh</button>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Email address </Form.Label>{" "}
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> Message </Form.Label>{" "}
                <Form.Control as="textarea" placeholder="Write a message" />
              </Form.Group>{" "}
              <Button variant="primary" type="submit">
                Submit{" "}
              </Button>{" "}
            </Form>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>
    );
  }
}

export default Contact;
