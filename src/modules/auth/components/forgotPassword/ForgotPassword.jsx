import React, { useState } from "react";
import { Link,  } from "react-router-dom";
import get from "lodash.get";
import { Button, Form, Message } from "semantic-ui-react";
import Logo from "./../../../../assets/images/logo.png";
import AuthServices from "./../../auth.service";
import style from "./../login/style.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [successfull, setSuccessFull] = useState(null);

  const adminLogin = async data => {
    try {
      const resetPassword = await AuthServices.forgotPassword({ email });
      setSuccessFull(get(resetPassword, "data.Data"));
      console.log("resetPassword", resetPassword);
    } catch (e) {
      const errorResponse = e.response;
      setError(get(errorResponse, "data.error.message"));
    }
  };

  return (
    <div className={style.authMain}>
      <div className={style.authContent}>
        <div className={style.authCard}>
          <img src={Logo} alt="Logo" className={style.authLogo} />

          {error && (
            <Message negative>
              <Message.Header>{error}</Message.Header>
            </Message>
          )}
          {successfull && <Message success header={successfull} />}

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

            <Button
              color="black"
              fluid
              size="huge"
              className={style.authInputField}
              style={{ margin: "auto" }}
            >
              Send Mail
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

            <Link to="/login">
              <Button
                type="submit"
                color="black"
                fluid
                size="huge"
                style={{ marginBottom: "10px" }}
              >
                Login
              </Button>
            </Link>
          </Message>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
