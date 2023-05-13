import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

export default function DavidNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Link href="/">
      <Navbar.Brand>David Envull</Navbar.Brand>
    </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={'div'}>
            <Link href="/blog">Blog</Link>
          </Nav.Link>
          <Nav.Link as={'div'}>
            <Link href="/contact-me">Contact</Link>
          </Nav.Link>
          <Nav.Link as={'div'}>
            <Link href="/about">About</Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={'div'}>
            <Link href="/blog/capybara">Capybara</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
