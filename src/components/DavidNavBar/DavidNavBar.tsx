import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import ThemeButton from "../ThemeButton/ThemeButton.jsx";

export default function DavidNavBar() {
  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: "2em" }}>
      <Container>
        <Link href="/">
          <Navbar.Brand>David Envull</Navbar.Brand>
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/blog">Blog</Link>
            <Link href="/contact-me">Contact</Link>
            <Link href="/about">About</Link>
          </Nav>
        </Navbar.Collapse>
        <ThemeButton />
      </Container>
    </Navbar>
  );
}
