import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import get from "lodash.get";
import { Button, Form, Message } from "semantic-ui-react";
import Spinner from  "./../../../../core/spinner/Spinner";
import Logo from "./../../../../assets/images/logo.png";
import AuthServices from "./../../auth.service";
import style from "./style.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loader, setLoader] = useState(false);

  const adminLogin = async data => {
    // setLoader(true);
    // setTimeout(async () => {
    try {
      // setLoader(true);
      const userData = await AuthServices.userLogin({
        email: email,
        password: password
      });
      setLoader(false);
      userData && setIsLoggedIn(true);
    } catch (e) {
      const errorResponse = e.response;
      setLoader(false);
      setError(get(errorResponse, "data.error.message"));
    }
    // }, 10000);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className={style.authMain}>
      {loader && <Spinner />}
      <div className={style.authContent}>
        <div className={style.authCard}>
          <img src={Logo} alt="Logo" className={style.authLogo} />

          {error && (
            <Message negative>
              <Message.Header>{error}</Message.Header>
            </Message>
          )}

          <Form className={style.authForm} size="large" onSubmit={adminLogin}>
            <Form.Input
              fluid
              icon="user"
              type="email"
              iconPosition="left"
              placeholder="E-mail address"
              className={style.authInputField}
              required
              onChange={e => setEmail(e.target.value)}
            />
            <Form.Input
              fluid
              required
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              className={style.authInputField}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              color="black"
              fluid
              size="huge"
              className={style.authInputField}
              style={{ margin: "auto" }}
            >
              Login
            </Button>
          </Form>

          <Message size="big">
            <Link to="/signup">
              <Button
                color="black"
                fluid
                size="huge"
                style={{ marginBottom: "10px" }}
              >
                Not Registered?
              </Button>
            </Link>

            <Link to="/forgot-password">
              <Button
                type="submit"
                color="black"
                fluid
                size="huge"
                style={{ marginBottom: "10px" }}
              >
                Forgot Password?
              </Button>
            </Link>
          </Message>
        </div>
      </div>
    </div>
  );
};

export default Login;
