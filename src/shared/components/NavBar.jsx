import React from 'react'
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const NavBar = ({ signIn }) => {
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("isLogin"));
    if (login) setIsLogin(true);
    else setIsLogin(false);
  }, [signIn]);
  const navigate = useNavigate();
  const logout = () => {
    if (isLogin && isLogin !== null) {
      localStorage.setItem("isLogin", false);
      navigate("/login");
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand href="#home">React App</Navbar.Brand>
          <Nav className="me-right">
            {isLogin && (
              <>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            )}
            {!isLogin && (
              <>
                <Nav.Link href="/register">Signup</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;