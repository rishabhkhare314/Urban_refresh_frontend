import React from "react";
import {
  List,
  Button,
  Message,
  Grid,
  Icon,
  Menu,
  Sticky,
  Segment
} from "semantic-ui-react";
import get from "lodash.get";
import style from "./style.module.css";
import Layout from "../../../core/layout/Layout";
import HowWorks from "./HowWorks";
import About from "./AboutPage";
import Faq from "./Faq";
import ProviderReview from "./ProviderReview";
import { serviceCategories } from "./../../../shared/data.json";

const ServiceCategories = ({ history, match }) => {
  const cityId = get(match, "params.cityId");
  const serviceId = get(match, "params.serviceId");
  const contextRef = React.createRef();
  const categoryHandler = obj => {
    history.push(
      `/${cityId}/service/${serviceId}/service-categories/${obj.name}/services`
    );
  };
  return (
    <Layout>
      <div>
        <section className={style.categoryBanner}>
          <div className={style.categoryBox}>
            <h1 className={style.categoryheading}>
              Best Plumbers in Ahmedabad
            </h1>
            <List as="ul" className={style.categorySubheading}>
              <List.Item as="li">Doorstep repair within 45 mins</List.Item>
              <List.Item as="li">30 day post-service guarantee</List.Item>
              <List.Item as="li">
                Protection Against Damage Upto INR 10,000
              </List.Item>
            </List>
          </div>

          <div className={style.serviceCategoryBox}>
            <p
              style={{
                fontSize: "18px",
                color: "white",
                paddingTop: "10px",
                marginLeft: "30px",
                fontWeight: "800"
              }}
            >
              Need a plumber for
            </p>
            {serviceCategories.map(item => {
              return (
                <Button
                  className={style.serviceButton}
                  onClick={() => categoryHandler(item)}
                  key={item.id}
                >
                  {item.name}
                </Button>
              );
            })}

            <Message style={{ textAlign: "center" }}>
              <Grid divided="vertically">
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <h2>
                      <Icon name="star" color="green" /> 4.7/5
                    </h2>
                    <p>based on 10 ratings</p>
                  </Grid.Column>
                  <Grid.Column>
                    <h2> 25,060</h2>
                    <p>bookings done in last few months</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Message>
          </div>
        </section>

        <div ref={contextRef}>
          {" "}
          <Sticky context={contextRef} style={{border:"none"}}>
            <Menu
              pointing
              style={{
                width: "40.5vw",
                margin: "50px 0 0px 25%",
                top:"50px"
              }}
            >
              <Menu.Item name="How's Work">
                <a href="#hows-work">How's Work</a>
              </Menu.Item>
              <Menu.Item name="Provider Reviews">
                <a href="#provider">Provider Reviews</a>
              </Menu.Item>
              <Menu.Item name="Faq">
                <a href="#faq">Faq</a>
              </Menu.Item>
              <Menu.Item name="About">
                <a href="#about">About</a>
              </Menu.Item>
            </Menu>
          </Sticky>
          <Segment attached="bottom">
            {" "}
            <section>
              <HowWorks />
              <ProviderReview />
              <Faq />
              <About />
            </section>
          </Segment>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceCategories;
