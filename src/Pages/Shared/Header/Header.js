import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <Navbar
      className="mb-4"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-white fw-bold fs-3">
            Dragon <span className="text-primary">News</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All news</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="bg-light rounded p-2">
            <>
              {user?.uid ? (
                <>
                  {user?.displayName}
                  <Button
                    variant="primary ms-4 me-2 text-decoration-none fw-bold"
                    onClick={handleLogOut}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="primary   px-2 py-1">
                    <Link
                      to="/login"
                      className="text-decoration-none text-white fw-bold"
                    >
                      Login
                    </Link>
                  </Button>
                  <Button variant="light ms-2 px-2 py-1">
                    <Link
                      to="/register"
                      className="text-decoration-none text-dark fw-bold"
                    >
                      Register
                    </Link>
                  </Button>
                </>
              )}
            </>
            <Link to="/profile">
              {user?.photoURL ? (
                <Image
                  style={{ height: "35px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUserAlt></FaUserAlt>
              )}
            </Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
