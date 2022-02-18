import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

import logo from "../../assets/img/navbar-logo.svg";

import "./mynavbar.styles.scss";

const MyNavbar = () => {
  return (
    <Navbar bg="navbar-dark navbar fixed-top" expand="lg" id="mainNav">
      <Container fluid className="container">
        <Navbar.Brand className="navbar-brand" href="#page-top">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="navbar-toggle" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="text-uppercase ms-auto py-4 py-lg-0">
            <Nav.Link className="nav-link" href="#services">
              Servicii
            </Nav.Link>
            <Nav.Link className="nav-link" href="#portfolio">
              Portofoliu
            </Nav.Link>
            <Nav.Link className="nav-link" href="#about">
              Despre noi
            </Nav.Link>
            <Nav.Link className="nav-link" href="#team">
              Echipă
            </Nav.Link>
            <Nav.Link className="nav-link" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
