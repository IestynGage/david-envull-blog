import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Link from "next/link";
import * as Icon from 'react-bootstrap-icons';

export default function DavidNavBar() {
  
  return (
    <Navbar bg="light" expand="lg" style={{marginBottom:'2em'}}>
    <Container>
      <Link href="/">
        <Navbar.Brand>David Envull</Navbar.Brand>
      </Link>
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
      <Button style={{color:'red'}}> 
        <Icon.MoonFill />
      </Button>
    </Container>
  </Navbar>
  )
}