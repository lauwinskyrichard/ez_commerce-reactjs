import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { BiUserCircle } from "react-icons/bi";

function TopNavbar() {
  return (

    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid className="navbarContainer">
        <Navbar.Brand className="brandTxt" href="/"><strong>Ez</strong>Commerce</Navbar.Brand>
        <Navbar className="justify-content-end">
          <Navbar.Text className="userTxt" >User 1&nbsp;&nbsp;&nbsp;</Navbar.Text>
          <BiUserCircle className="userIcon" size="40px" color="white" />
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
