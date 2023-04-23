import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import SiteLogo from '../../assets/svg/cool_india_logo.svg'

const Coolheader = () => {
  
  return (
    <Navbar className="main-menu" bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={SiteLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-lg-auto me-lg-4">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
            <Nav.Link href="/Products">Products</Nav.Link>
            <Nav.Link href="/Gallery">Gallery</Nav.Link>
            <Nav.Link href="/Blogs">Blogs</Nav.Link>
          </Nav>
          <Nav.Link className="custom-btn" href="/Contact">Contact Us</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Coolheader;