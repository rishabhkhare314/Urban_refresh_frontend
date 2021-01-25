import React from "react";
import Layout from "../../../core/layout/Layout";
import { Container, Grid } from "semantic-ui-react";
// import AddressAndDate from "./AddressAndDate";
// import Payment from "./Payment";
import RowItem from "./RowItem";
import Summary from "./Summary";
const Cart = () => {
  const [firstOpen, setFirstOpen] = React.useState(false);

  const openAddressModal = bool => {
    setFirstOpen(bool);
  };
  return (
    <div>
      <Layout>
        <Container style={{ marginTop: "100px" }}>
          <Grid>
            <RowItem />
            <Summary openModal={openAddressModal} />
          </Grid>
        </Container>
      </Layout>
    </div>
  );
};

export default Cart;
