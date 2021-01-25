import React from "react";
import { Container, Grid, Form, Image } from "semantic-ui-react";
import style from "./style.module.css";
const Refer = () => {
  return (
    <section>
      <div className={style.refer}></div>
      <Container>
        <Grid style={{ padding: "40px 0" }}>
          <Grid.Row columns={2}>
            <Grid.Column width={8} style={{ margin: "auto" }}>
              <div>
                <h1 className={style.referHeading}>
                  Book professionals from your phone
                </h1>
                <p className={style.referSubheading}>
                  Enter your mobile number to get the App download link.
                </p>
                <Form>
                  <Form.Field>
                    <input type="email" placeholder="Enter email" />
                  </Form.Field>
                </Form>
              </div>
            </Grid.Column>
            <Grid.Column>
              <Image
                src="https://res.cloudinary.com/urbanclap/image/upload/w_300,f_auto/categories/category_v2/category_2d7045d0.png"
                alt="refer-image"
                className={style.referImage}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  );
};

export default Refer;
