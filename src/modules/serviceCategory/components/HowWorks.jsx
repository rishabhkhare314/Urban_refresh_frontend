import React from "react";

import { Header, Divider, List } from "semantic-ui-react";
import style from "./style.module.css";
const HowWorks = () => {
  return (
    <div className={style.works}>
      <div className={style.worksBody} id="hows-work">
        <Header as="h2" className={style.worksHeading}>
          How it Works
        </Header>
        <Divider />
        <List>
          <List.Item>
            <List.Icon
              name="file text"
              size="large"
              verticalAlign="middle"
              className={style.workIcon}
            />
            <List.Content className={style.listContent}>
              <List.Header>Choose the type of service</List.Header>
              <List.Description>Select the service required</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon
              name="calendar alternate"
              size="large"
              verticalAlign="middle"
              className={style.workIcon}
            />
            <List.Content className={style.listContent}>
              <List.Header>Choose your time-slot</List.Header>
              <List.Description>We service from 9am-9pm</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon
              name="user"
              size="large"
              verticalAlign="middle"
              className={style.workIcon}
            />
            <List.Content className={style.listContent}>
              <List.Header>Hassle-free service</List.Header>
              <List.Description>
                Our professional will get in touch with you one hour before the
                service
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>{" "}
    </div>
  );
};

export default HowWorks;
