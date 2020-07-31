import React, { Component } from "react";
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Navbar.Brand href="/"><span role="img" aria-label="moovie">🎬</span> Movies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-auto mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="/login">Login <i class="fa fa-lock"></i></Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
