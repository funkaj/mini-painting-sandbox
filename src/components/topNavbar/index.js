import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import "./index.css";

function TopNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">Funk.Ink</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link href="/">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link href="/about">About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link href="/contact">Contact</Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;