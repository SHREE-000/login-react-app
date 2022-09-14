import React from 'react'
import { useRef, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AlertBox from "../../src/shared/components/AlertBox";
import NavBar from '../shared/components/NavBar';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();

      const [email, setEmail] = useState();
      const [password, setPassword] = useState();
      const [checkEmail, setCheckEmail] = useState();
      const [checkPassword, setCheckPassword] = useState();
      const [signIn, setSignIn] = useState();

        const usernameRef = useRef();
        useEffect(() => {
          if (usernameRef.current) {
            usernameRef.current.focus();
          }
        }, []);

          const handleEmail = (event) => {
            event.preventDefault();
            setEmail(event.target.value);
          };

          const handlePassword = (event) => {
            event.preventDefault();
            setPassword(event.target.value);
          };

          const login = (event) => {
            event.preventDefault()
            setCheckEmail(false);
            setCheckPassword(false);
            const userData = JSON.parse(localStorage.getItem("singupDetails"));
            if (userData && userData !== null) {
                if (userData.email !== email) setCheckEmail(true);
                else setCheckEmail(false);

                if (userData.password !== password) setCheckPassword(true);
                else setCheckPassword(false);

                if (userData.password === password && userData.email === email) {
                    localStorage.setItem("isLogin", true);
                    setSignIn(true);
                    navigate('/home');
                }
            }
          }

  return (
    <div className="w-50 container mt-5 mb-5">
      <NavBar signIn={signIn} />
      {checkEmail && <AlertBox loginEmail={checkEmail} />}
      {checkPassword && <AlertBox loginPassword={checkPassword} />}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleEmail}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicPassword"
        onChange={handlePassword}
      >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={login}>
        Submit
      </Button>
    </div>
  );
}

export default LoginPage;