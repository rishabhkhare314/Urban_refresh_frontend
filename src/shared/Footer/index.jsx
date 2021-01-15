import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import logo from "./../../assets/images/logo.png";
const Footer = () => {
  return (
    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={7}>
            <Image src={logo} size="large" />
          </Grid.Column>
          <Grid.Column width={9}>
            <Header
              inverted
              as="h4"
              content="Serving In"
              style={{ textAlign: "left" }}
            />
            <List
              link
              inverted
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: " wrap"
              }}
            >
              <List.Item as="a" style={{ padding: "20px" }}>
                Link One
              </List.Item>
              <List.Item as="a" style={{ padding: "20px" }}>
                Link Two
              </List.Item>
              <List.Item as="a" style={{ padding: "20px" }}>
                Link Three
              </List.Item>
              <List.Item as="a" style={{ padding: "20px" }}>
                Link Four
              </List.Item>{" "}
              <List.Item as="a" style={{ padding: "20px" }}>
                Link One
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Header size="small" style={{ color: "#fff" }}>
          &#169; UrbanRefresh 2020
        </Header>
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="#">
            Site Map
          </List.Item>
          <List.Item as="a" href="#">
            Contact Us
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default Footer;
