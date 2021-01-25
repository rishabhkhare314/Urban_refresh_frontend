import React from "react";
import { Grid, Divider, Table, Button } from "semantic-ui-react";
import style from "./style.module.css";
const Summary = ({ openModal }) => {
  return (
    <Grid.Column width={6}>
      <div className={style.summary_Block}>
        <div className={style.summary_Body}>
          <h2>Summary</h2>
          <Divider />
          <Table className={style.summary_PriceItem}>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Item Total</Table.Cell>
                <Table.Cell style={{ textAlign: "right" }}>
                  &#8377;1000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> conviences other Charges</Table.Cell>
                <Table.Cell style={{ textAlign: "right" }}>
                  &#8377;99
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Total</Table.Cell>
                <Table.Cell style={{ textAlign: "right" }}>
                  &#8377;1099
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <div>
          <Button
            className={style.place_Button}
            onClick={() => openModal(true)}
            color="black"
          >
            Place An Order
          </Button>
        </div>
      </div>
    </Grid.Column>
  );
};

export default Summary;
