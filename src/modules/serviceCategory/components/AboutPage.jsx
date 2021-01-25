import React from "react";
import { Header, Divider, List } from "semantic-ui-react";
import style from "./style.module.css";

const About = () => {
  return (
    <div className={style.about} id="about">
      {/* <Container text> */}
      <div className={style.aboutBody}>
        <Header as="h2" className={style.aboutHeading}>
          All About Plumbers
        </Header>
        <Divider />
        <Header as="h4" className={style.listHeading}>
          Plumbeing Services
        </Header>
        <p className={style.listText}>
          A well-functioning household is essential for effectiveness in life.
          Kitchens and bathrooms are an essential fragment of a house. Any kind
          of obstruction, such as a clogged pipe or running toilet, can bring
          your entire schedule to a standstill, while at the same time
          disrupting your normalcy of everyday life. Given that materials such
          as pipes and cisterns, which are used in building your living space,
          come with an expiry date, you need to keep them updated and in a
          working condition. Some materials or machines require constant
          maintenance while others require replacements and fixes. It could be a
          leaking tap that you might be ignoring or a condition that needs to be
          dealt with immediately, such as a blockage in the toilet trap.
        </p>
        <Header as="h4" className={style.listHeading}>
          What is offered ?
        </Header>

        <p className={style.listText}>
          Urban Company has your back for all the leaks you’re experiencing. Our
          services vary from fixes to new fittings, cleaning and other things
          that come under the expertise of a plumber. Given that the
          professional is booked for your preferred time frame, the price is
          calculated on the basis of working hours.
        </p>
        <Header as="h4" className={style.listHeading}>
          Why Urban Company Plumbing Service?
        </Header>
        <List as="ul">
          <List.Item as="li">
            <p className={style.listText}>
              Post service payment - Pay online after you are satisfied and
              content with the service provided. The payment is taken through an
              online portal. The link of the same will be sent to you via email
              and/or message after your errand has been completed.
            </p>
          </List.Item>
          <List.Item as="li">
            <p className={style.listText}>
              Verified experts - The safety and satisfaction of our customers
              remain to be on the top of our priority list. This is the reason
              that each of them is taken through an internal screening and
              security check to find their expertise in the field.
            </p>
          </List.Item>

          <List.Item as="li">
            <p className={style.listText}>
              Insurance – We, at Urban Company, feel responsible for our
              customers. This is what distinguishes us from other service
              providers. We take full responsibility of the ownership of the
              work undertaken and hence, we have insurance of upto Rs. 5,000
              against damages so that you can sit back and relax.
            </p>
          </List.Item>
        </List>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default About;
