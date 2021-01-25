import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Divider, Message } from "semantic-ui-react";
import get from "lodash.get";
import AuthServices from "../../auth.service";
import Logo from "./../../../../assets/images/logo.png";
import style from "./style.module.css";

const SignUp = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    password: "",
    address: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      pinCode: ""
    }
  });
  const [error, setError] = useState(null);

  const changeHandler = e => {
    userData[e.target.name] = e.target.value;
    setUserData({ ...userData });
  };

  const onSubmitHandler = async e => {
    try {
      const userRegistered = await AuthServices.userSignUp(userData);
    console.log("User Registered",userRegistered)
    } catch (err) {
      const errorResponse = err.response;
      setError(get(errorResponse, "data.error.message"));
    }
  };

  return (
    <div className={style.signupMain}>
      <div className={style.signupContent}>
        <div className={style.signupCard}>
          <img src={Logo} alt="Logo" className={style.signupLogo} />
          <Divider />
          <Form
            size="large"
            className={style.signupForm}
            autoComplete="off"
            onSubmit={onSubmitHandler}
          >
            {error && (
              <Message
                negative
                compact
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <Message.Header>{error}</Message.Header>
              </Message>
            )}
            <Form.Group widths="equal">
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                label="First name"
                placeholder="First name"
                className={style.signupInputField}
                required
                name="firstName"
                onChange={changeHandler}
              />
              <Form.Input
                fluid
                label="Last name"
                placeholder="Last name"
                icon="user"
                iconPosition="left"
                className={style.signupInputField}
                name="lastName"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                label="Email"
                placeholder="Enter Email"
                className={style.signupInputField}
                required
                name="email"
                onChange={changeHandler}
              />
              <Form.Input
                fluid
                label="Contact Number"
                placeholder="Enter Contact Number"
                icon="phone volume"
                iconPosition="left"
                className={style.signupInputField}
                required
                name="contactNumber"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                label="Password"
                placeholder="Enter Password...."
                className={style.signupInputField}
                required
                name="password"
                onChange={changeHandler}
              />
              <Form.Input
                fluid
                label="Confirm Password"
                placeholder="Enter Confirm Password...."
                icon="lock"
                iconPosition="left"
                className={style.signupInputField}
                required
                name="cpassword"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                icon="address book"
                iconPosition="left"
                label="lane No 1"
                placeholder="Enter Lane 1"
                className={style.signupInputField}
                required
                name="addressLine1"
                onChange={changeHandler}
              />
              <Form.Input
                fluid
                label="lane No 2"
                placeholder="Enter Lane 2"
                icon="address book"
                iconPosition="left"
                className={style.signupInputField}
                required
                name="addressLine2"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                icon="building outline"
                iconPosition="left"
                label="City"
                placeholder="Enter city.."
                className={style.signupInputField}
                required
                name="city"
                onChange={changeHandler}
              />
              <Form.Input
                fluid
                label="State"
                placeholder="Select State"
                icon="building"
                iconPosition="left"
                className={style.signupInputField}
                required
                name="state"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                icon="numbered list"
                iconPosition="left"
                label="Pincode"
                placeholder="Enter PinCode..."
                className={style.signupInputField}
                required
                name="pinCode"
                onChange={changeHandler}
              />
            </Form.Group>
            <Button
              color="black"
              fluid
              size="huge"
              className={style.signupInputField}
              style={{ margin: "auto" }}
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
