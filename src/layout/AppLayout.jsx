import React, { useState } from "react";
import "./AppLayout.style.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    // url을 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };
  return (
    <div className="main-navbar">
      <Navbar expand="lg" className="custom-navbar" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://static.vecteezy.com/system/resources/previews/029/337/390/non_2x/netflix-logo-black-background-free-vector.jpg"
              width="100"
              height="65"
              className="d-inline-block align-top"
              alt="Netflix logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/movies">
                Movies
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button
                variant="outline-danger"
                onClick={searchByKeyword}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
