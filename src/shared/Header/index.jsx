import React from "react";
import { Menu } from "semantic-ui-react";
import "./style.css";
import logo from "./../../assets/images/logo.png";
const Header = () => {
  return (
    <div>
      <Menu stackable>
        <Menu.Item>
          <img src={logo} style={{ width: "20.5em" }} />
        </Menu.Item>

        <Menu.Item name="blog" position="right">
          Blog
        </Menu.Item>

        <Menu.Item name="professional">Register As A Professional</Menu.Item>

        <Menu.Item name="sign-in">LogIn / SignUp</Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
