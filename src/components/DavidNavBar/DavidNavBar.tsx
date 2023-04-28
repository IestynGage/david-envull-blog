import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Link from "next/link";

export default function DavidNavBar() {
  
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Link href="/">
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link href="/blog">
            Blog
          </Link>
          <Link href="/contact-me">
            Contact
          </Link>
          <Link href="/about">
            About
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}