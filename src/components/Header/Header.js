import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  let activeStyles = {
    color: "deeppink",
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink
            to="/home"
            id="logo"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            Actress Madness
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <NavLink
                to="/home"
                id="menu"
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/blogs"
                id="menu"
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Blogs
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/about"
                id="menu"
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                About
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
