import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { userLogin, userRegister } from "../../api";

type inputErrors = {
  email?: String;
  password?: String;
};

type loginModeProps = {
  loginMode: boolean;
};

const LoginForm = (props: loginModeProps & LoginProps): JSX.Element => {
  const { loginMode, onLogin } = props;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [inputErrors, setInputErrors] = useState<inputErrors>({});
  const navigate = useNavigate();

  function validateInput() {
    if (password.length < 8) {
      setInputErrors({ email: "Insert a valid email address" });
    }

    if (password.length < 8) {
      setInputErrors({
        ...inputErrors,
        password: "Password must have at least 8 characters",
      });
    }

    return Object.keys(inputErrors).length === 0;
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (validateInput()) {
      let result;
      let message;

      if (loginMode) {
        result = await userLogin(email, password);
        message = "Email and password don't match. Try logging in again.";
      } else {
        result = await userRegister(email, password);
        message = "User with email already exists.";
      }

      if (result === undefined || result === null) {
        alert(message);
      } else {
        onLogin(result.id);
        navigate("/profile");
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={email in inputErrors}
        />
        <Form.Control.Feedback type="invalid">
          {inputErrors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={password in inputErrors}
        />
        <Form.Control.Feedback type="invalid">
          {inputErrors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <button className="btn btn-dark-green c-green-hover" type="submit">
        {loginMode ? "Login" : "Register"}
      </button>
    </Form>
  );
};

export default LoginForm;
