import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="header-nav">
      <Container>

        {/* Logo */}
        <Navbar.Brand>
          <NavLink to="/" className="logo-div">
           
            React Practice
          </NavLink>
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <NavLink to="/">Tic-Tac-Toe</NavLink>
            <NavLink to="/random-color-generator">Random Color Generator</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/users-list">Users List</NavLink>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;