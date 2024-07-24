import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

function NavScrollExample() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          WebSite
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
            variant="tabs"
            defaultActiveKey="/home"
            activeKey=" bg-primary"
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/discover">
              Discover
            </Nav.Link>
            <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/mycart">
                My Cart
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/discount">
                Discounts%
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/arrivals">
                Fresh Arrivals
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contactus">
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              variant="outline-light"
              onClick={() => navigate("/search-results")}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
