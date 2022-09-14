import Alert from "react-bootstrap/Alert";

function AlertBox({
  username = false,
  email = false,
  password = false,
  conformPassword = false,
  passwordMissmatch = false,
  validateForm = false,
  loginEmail = false,
  loginPassword = false,
}) {
  return (
    <>
      {username && (
        <Alert variant="warning">
          Username required minimum 2 letters and maximum 13 letters
        </Alert>
      )}
      {email && <Alert variant="warning">Please insert valid mail id</Alert>}
      {password && (
        <Alert variant="warning">
          Password required minimum 5 characters and maximum 12 characters
        </Alert>
      )}
      {conformPassword && (
        <Alert variant="warning">
          Conform password required minimum 5 characters and maximum 12
          characters
        </Alert>
      )}
      {passwordMissmatch && (
        <Alert variant="warning">
          Required password and confirm password are need to be same
        </Alert>
      )}
      {validateForm && (
        <Alert variant="warning">Please fill the fields with valid data</Alert>
      )}
      {loginEmail && <Alert variant="danger">Entered email id is wrong</Alert>}
      {loginPassword && (
        <Alert variant="danger">Entered password is wrong</Alert>
      )}
    </>
  );
}

export default AlertBox;
