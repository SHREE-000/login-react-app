import React from "react";
import { useRef, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  validateUsername,
  validateMail,
  validatePassword,
  validateRegisterForm,
} from "../../src/shared/utils/validation";
import AlertBox from "../../src/shared/components/AlertBox";
import NavBar from "../shared/components/NavBar";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [signIn, setSignIn] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [conformPassword, setConformPassword] = useState();
  const [passwordMissmatch, setPasswordMissmatch] = useState();
  const [validateForm, setValidateForm] = useState();
  const [checkUsername, setCheckUsername] = useState();
  const [checkemail, setCheckemail] = useState();
  const [checkpassword, setCheckPassword] = useState();
  const [checkConformPassword, setCheckConformPassword] = useState();

  const usernameRef = useRef();
  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const handleAlertBox = (event) => {
    const checkUsername = validateUsername(name);
    if (checkUsername) {
      setCheckUsername(false);
    } else {
      setCheckUsername(true);
    }
    const checkemail = validateMail(email);
    if (checkemail) {
      setCheckemail(false);
    } else {
      setCheckemail(true);
    }

    const checkPassword = validatePassword(password);
    if (checkPassword) {
      setCheckPassword(false);
    } else {
      setCheckPassword(true);
    }

    const checkConformPasswordd = validatePassword(conformPassword);
    if (checkConformPasswordd) {
      setCheckConformPassword(false);
    } else {
      setCheckConformPassword(true);
    }
  };

  const handleUsername = (event) => {
    event.preventDefault();
    setName(event.target.value);
    setCheckUsername(false);
    setCheckemail(false);
    setCheckPassword(false);
    setCheckConformPassword(false);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    setCheckUsername(false);
    setCheckemail(false);
    setCheckPassword(false);
    setCheckConformPassword(false);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
    setCheckUsername(false);
    setCheckemail(false);
    setCheckPassword(false);
    setCheckConformPassword(false);
  };

  const handleConformPassword = (event) => {
    event.preventDefault();
    setConformPassword(event.target.value);
    setCheckUsername(false);
    setCheckemail(false);
    setCheckPassword(false);
    setCheckConformPassword(false);
  };

  const signup = (event) => {
    event.preventDefault();
    if (password !== conformPassword) {
      setPasswordMissmatch(true);
    } else {
      setPasswordMissmatch(false);
    }
    const validateForm = validateRegisterForm({
      username: name,
      mail: email,
      password,
      conformPassword,
    });
    if (validateForm) {
      setValidateForm(false);
      if (!passwordMissmatch) {
        const userDetails = {
          name,
          email,
          password,
        };
        localStorage.setItem("singupDetails", JSON.stringify(userDetails));
        localStorage.setItem("isLogin", true);
        setSignIn(true);
        navigate("/home");
      }
    } else {
      setValidateForm(true);
    }
  };

  return (
    <div className="w-50 container mt-5 mb-5">
      <NavBar signIn={signIn} />
      {checkUsername && <AlertBox username={checkUsername} />}
      {checkemail && <AlertBox email={checkemail} />}
      {checkpassword && <AlertBox password={checkpassword} />}
      {checkConformPassword && (
        <AlertBox conformPassword={checkConformPassword} />
      )}
      {passwordMissmatch && <AlertBox passwordMissmatch={passwordMissmatch} />}
      {validateForm && <AlertBox validateForm={validateForm} />}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            ref={usernameRef}
            onChange={handleUsername}
            onClick={handleAlertBox}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmail}
            onClick={handleAlertBox}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          onChange={handlePassword}
          onClick={handleAlertBox}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicConformPassword"
          onChange={handleConformPassword}
          onClick={handleAlertBox}
        >
          <Form.Label>Conform Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={signup}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
