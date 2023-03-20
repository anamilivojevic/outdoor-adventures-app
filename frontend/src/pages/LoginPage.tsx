import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LoginForm from "../components/loginAndProfileComponents/LoginForm";
import { useState } from "react";

const LoginPage = ({ onLogin }: LoginProps): JSX.Element => {
  const [loginMode, setLoginMode] = useState<boolean>(true);

  function toggleLoginRegister() {
    setLoginMode(!loginMode);
  }

  return (
    <main className="my-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5">
            {loginMode ? (
              <>
                <h2 className="mb-4 mt-3">Login</h2>
                <LoginForm loginMode={loginMode} onLogin={onLogin} />
              </>
            ) : (
              <>
                <h2 className="mb-4 mt-3">Create an account</h2>
                <LoginForm loginMode={loginMode} onLogin={onLogin} />
              </>
            )}
          </div>
          <div className="mt-4" style={{ fontSize: "0.9rem" }}>
            {loginMode
              ? "No account? Register"
              : "Already have an account? Log in"}
            <a
              className="c-text-wine ms-1"
              style={{ cursor: "pointer" }}
              onClick={toggleLoginRegister}>
              here
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
