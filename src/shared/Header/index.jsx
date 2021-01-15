import React from "react";
import { Menu } from "semantic-ui-react";
import "./style.css";
import logo from "./../../assets/images/logo.png";
// import Login from "../../module/components/login";
const Header = () => {
  const [visible, setVisible] = React.useState(false);

  console.log("VISIBILEEEE::::::::::::",visible)
  return (
    <div>
      <Menu stackable>
        <Menu.Item>
          <img src={logo} style={{ width: "20.5em" }} />
        </Menu.Item>

        <Menu.Item
          name="blog"
          position="right"
          //   active={activeItem === "features"}
          //   onClick={this.handleItemClick}
        >
          Blog
        </Menu.Item>

        <Menu.Item
          name="professional"
          //   active={activeItem === "testimonials"}
          //   onClick={this.handleItemClick}
        >
          Register As A Professional
        </Menu.Item>

        <Menu.Item
          name="sign-in"
          //   active={activeItem === "sign-in"}
          onClick={()=>setVisible(!visible)}
        >
          LogIn / SignUp
        </Menu.Item>
        {visible ? <Login /> : ""}
      </Menu>
    </div>
  );
};

export default Header;
