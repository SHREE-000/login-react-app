export const validateRegisterForm = ({
  mail,
  username,
  password,
  conformPassword,
}) => {
  const isMailValid = validateMail(mail);
  const isUsernameValid = validateUsername(username);
  const isPasswordValid = validatePassword(password);
  const isConfirmPasswordValid = validatePassword(conformPassword);
  return (
    isMailValid && isUsernameValid && isPasswordValid && isConfirmPasswordValid
  );
};

export const validatePassword = (password) => {
  if (password === "" || password === undefined) return false;
  return password.length >= 5 && password.length <= 12;
};

export const validateMail = (mail) => {
  if (mail === "" || mail === undefined) return false;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};

export const validateUsername = (username) => {
  if (username === "" || username === undefined) return false;
  return username.length >= 2 && username.length <= 13;
};
