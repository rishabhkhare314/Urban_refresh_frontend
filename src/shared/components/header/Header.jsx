import React from "react";
import { Menu } from "semantic-ui-react";
// import style from "./style.module.css";
import logo from "./../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Menu stackable fixed="top">
        <Link to="/">
          <Menu.Item>
            <img src={logo} style={{ width: "20.5em" }} alt="logo" />
          </Menu.Item>
        </Link>
        <Menu.Item name="blog" position="right">
          Blog
        </Menu.Item>

        <Menu.Item name="professional">Register As A Professional</Menu.Item>
        <Link to="/user-profile">
          <Menu.Item name="professional">User Profile</Menu.Item>
        </Link>
        <Link to="/cart">
          <Menu.Item name="professional">Cart</Menu.Item>
        </Link>
        <Link to="/orders">
          <Menu.Item name="professional">Orders</Menu.Item>
        </Link>
        <Link to="/login">
          <Menu.Item name="sign-in">LogIn / SignUp</Menu.Item>
        </Link>
      </Menu>
    </div>
  );
};

export default Header;
