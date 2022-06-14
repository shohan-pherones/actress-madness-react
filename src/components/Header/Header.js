import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/home" id="logo">
            Actress Madness
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="/home" id="menu">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/blogs" id="menu">
                Blogs
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" id="menu">
                About
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
