import React from "react";
import {Grid,Card,Image,Header,Button} from "semantic-ui-react"
import style from "./style.module.css"
const RowItem = () => {
  return (
    <Grid.Column width={10}>
      {Array(6)
        .fill()
        .map((i, index) => (
          <Card key={index} className={style.orderCard} fluid>
            <Card.Content>
              <Grid style={{ margin: "auto" }}>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Image
                      floated="left"
                      size="mini"
                      src="https://rukminim1.flixcart.com/image/75/75/kf0087k0/portable-laptop-table/h/s/h/mfb-melamine-fiberboard-bbd-foldable-laptop-table-with-cup-original-imafvjwztczaq8ah.jpeg"
                      className={style.orderImage}
                    />
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Card.Header>
                      <Header as="h4">WashBasin Repair</Header>
                    </Card.Header>

                    <Card.Description>Provider: Ramlal</Card.Description>
                    <Card.Meta>Ahmedabad Memnagar</Card.Meta>
                  </Grid.Column>
                  <Grid.Column width={2} style={{ margin: "auto" }}>
                    <Card.Header>
                      <Header as="h4">&#8377;599</Header>{" "}
                    </Card.Header>
                  </Grid.Column>
                  <Grid.Column width={5} style={{ margin: "auto" }}>
                    <Header as="h4" style={{ color: "#696969" }}>
                      <div
                        className={[style.orderStatus, style.orderSuccess].join(
                          " "
                        )}
                      ></div>
                      <Button
                        circular
                        icon="plus"
                        primary
                        className={style.button}
                      />{" "}
                      &nbsp; &nbsp; 5 &nbsp; &nbsp;
                      <Button
                        circular
                        icon="minus"
                        primary
                        className={style.button}
                      />
                    </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
          </Card>
        ))}
    </Grid.Column>
  );
};

export default RowItem;
