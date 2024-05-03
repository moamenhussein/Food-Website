import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/logo.png"
import "./Navbars.css";
import { Link } from "react-router-dom";
function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <img src={logo} alt="Logo" title="Logo"/>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbarHeading">
            <Link to="/">Home</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Explore Food</Link>
            <Link to="/">Reviews</Link>
            <Link to="/" className="me-4">FAQ</Link>
          </Nav>
            <Nav.Link href="#link"><button className="btn-navbar buttonNavbar">1800 789 123</button></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
