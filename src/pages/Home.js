import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import HeaderComp from "../components/Header";
import UserTableComp from "../components/UserTable";

import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "User List ",
      userList: {
        data: [],
      },
    };
  }
  shouldComponentUpdate() {
    return true;
  }
  getUsers = () => {
    fetch("https://reqres.in/api/users", { method: "GET" })
      .then((data) => data.json())
      .then((json) => this.setState({ userList: json }));
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <HeaderComp title="List"></HeaderComp>
            <Button onClick={this.getUsers} variant="primary">
              Refresh
            </Button>
            <hr></hr>
            <UserTableComp data={this.state.userList}></UserTableComp>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
