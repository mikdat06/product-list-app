import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="">
      <Container className="nav-container ">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navbars ">
            <NavLink className="links btn btn-light " to="/">
              All
            </NavLink>
            <NavLink className="links btn btn-light" to="/electronics">
              Electronics
            </NavLink>
            <NavLink className="links btn btn-light" to="/jewelery">
              Jewelery
            </NavLink>
            <NavLink className="links btn btn-light" to="/menClotings">
              Men Clothings
            </NavLink>
            <NavLink className="links btn btn-light" to="/womenClotings">
              Women Clothings
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
