import React from "react";
import { Container, Grid, GridColumn, Form,Image } from "semantic-ui-react";
import "./style.css";
const Refer = () => {
  return (
    <section>
      <div className="refer"></div>
      <Container>
        <Grid style={{ padding:'40px 0'}}>
          <Grid.Row columns={2}>
            <Grid.Column width={8} style={{ margin: "auto" }}>
              <div >
                <h1 className="refer-heading">
                  Book professionals from your phone
                </h1>
                <p className="refer-subheading">
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
                style={{ margin: "0 auto", alignItems: "center",height: '344px',
                width: '11vw' }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  );
};

export default Refer;
