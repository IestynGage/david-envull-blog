import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import navBarStyles from "../../styles/DavidNavBar.module.css";

export default function DavidNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className={navBarStyles.navLinks} href="/">
          <Navbar.Brand>David Envull</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={"div"}>
              <Link className={navBarStyles.navLinks} href="/blog">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link as={"div"}>
              <Link className={navBarStyles.navLinks} href="/contact-me">
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link as={"div"}>
              <Link className={navBarStyles.navLinks} href="/about">
                About
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
