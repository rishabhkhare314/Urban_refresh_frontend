import React from "react";
import { Container, Image } from "semantic-ui-react";
import "./style.css";
const Offer = () => {
  return (
    <div>
      <Container style={{ textAlign: "center" }}>
        <h1>Offer Heading</h1>
        <h4>Offer Sub-Heading</h4>
        <Image.Group size="small">
          <Image
            className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
            alt="offer"
          />
          <Image
            className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
            alt="offer"
          />
          <Image
            className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
            alt="offer"
          />{" "}
          <Image
            className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
            alt="offer"
          />
          {/* <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
            alt="offer"
          /> */}
          {/* <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
            alt="offer"
          />
          <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
            alt="offer"
          />{" "}
          <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
            alt="offer"
          />
          <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
            alt="offer"
          />{" "}
          <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
            alt="offer"
          />
          <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
            alt="offer"
          />{" "}
          <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
            alt="offer"
          />
          <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
            alt="offer"
          />{" "}
          <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
            alt="offer"
          />
          <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
            alt="offer"
          />{" "}
          <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
            alt="offer"
          />
          <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
            alt="offer"
          />{" "}
          <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
            alt="offer"
          />
          <Image className="offer-images"
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
            alt="offer"
          /> */}
        </Image.Group>
        {/* <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column className="offer-image">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
                alt="offer"
              />
            </Grid.Column>
            <Grid.Column className="offer-image">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
                alt="offer"
              />
            </Grid.Column>
            <Grid.Column className="offer-image">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
                alt="offer"
              />
            </Grid.Column>
            <Grid.Column className="offer-image">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
                alt="offer"
              />
            </Grid.Column>{" "}
            <Grid.Column className="offer-image">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
                alt="offer"
              />
            </Grid.Column>
            <Grid.Column className="offer-image">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
                alt="offer"
              />
            </Grid.Column>{" "}
            <Grid.Column className="offer-image">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
                alt="offer"
              />
            </Grid.Column>
            <Grid.Column className="offer-image">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
                alt="offer"
              />
            </Grid.Column>{" "}
            <Grid.Column className="offer-image">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
                alt="offer"
              />
            </Grid.Column>{" "}
            <Grid.Column className="offer-image">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
                alt="offer"
              />
            </Grid.Column>
            <Grid.Column className="offer-image">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602492518736-ead43e.jpeg"
                alt="offer"
              />
            </Grid.Column>
            <Grid.Column className="offer-image">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1608532503959-57681f.jpeg"
                alt="offer"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
      </Container>
    </div>
  );
};

export default Offer;
