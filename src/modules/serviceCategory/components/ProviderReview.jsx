import React from "react";
import { Header, Divider, Card, Image, Icon } from "semantic-ui-react";

import style from "./style.module.css";

const ProviderReview = () => {
  let obj = {
    first: "Rishabh",
    last: "Khare"
  };
  //   const image = "https://react.semantic-ui.com/images/avatar/large/steve.jpg";
  const image = "";
  return (
    <div className={style.reviews}  id="provider">
      <div className={style.reviewsBody}>
        <Header as="h2" className={style.reviewHeading}>
          Service Name
        </Header>
        <p className={style.reviewSubheading}>Length service name in city</p>
        <Divider />

        <div>
          <Card
           className={style.providerReview}
          >
            <Card.Content>
              {image ? (
                <Image
                  floated="left"
                  size="mini"
                  src={image}
                  circular
                  className={style.providerImage}
                />
              ) : (
                <Image
                  floated="left"
                  size="mini"
                  circular
                  className={style.providerImage}
                >
                  <p className={style.reviewName}>
                    {obj.first.charAt(0) + obj.last.charAt(0)}
                  </p>
                </Image>
              )}

              <div className={style.cardContent}>
                <Card.Header className={style.providerName}>
                  Ramlal
                </Card.Header>
                <Card.Meta>Memnagar Ahmedabad</Card.Meta>
                <Card.Meta style={{ color: "black" }} icon="star outline">
                  <Icon name="star"></Icon> 4.7
                </Card.Meta>
              </div>

              <Card
              className={style.customerReview}
              >
                <Card.Content>
                  {image.length > 0 ? (
                    <Image
                      floated="left"
                      size="mini"
                      src={image}
                      circular
                      className={style.customerImage}
                    />
                  ) : (
                    <Image
                      floated="left"
                      size="mini"
                      circular
                      className={style.customerImage}
                    >
                      <p className={style.reviewName}>
                        {obj.first.charAt(0) + obj.last.charAt(0)}
                      </p>
                    </Image>
                    // <div className="profileImage">
                    //   <div className="name">
                    //     {obj.first.charAt(0) + obj.last.charAt(0)}
                    //   </div>
                    // </div>
                  )}
                  <div className={style.cardContent}>
                    <Card.Header>Rishabh Khare</Card.Header>
                    <Card.Meta style={{ color: "black" }} icon="star outline">
                      <Icon name="star"></Icon> 4.7
                    </Card.Meta>
                    <Card.Description>
                      Provided best service in our city.
                    </Card.Description>
                  </div>
                </Card.Content>
              </Card>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProviderReview;
