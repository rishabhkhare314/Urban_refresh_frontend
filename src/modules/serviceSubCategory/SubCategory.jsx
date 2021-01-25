import React, { useState } from "react";
import { Grid, Modal, Button, Icon } from "semantic-ui-react";
import PerItem from "./PerItem";
import ProductDescription from "./ProductDescription";
import { serviceSubCategories } from "../../shared/data.json";
import Layout from "../../core/layout/Layout";

function SubCategory() {
  const [showDescription, setShowDescription] = useState(false);
  const [selectItem, setSelectItem] = useState(null);

  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);

  const getItemId = item => {
    console.log("Get Item Id", item);
    setShowDescription(true);
    setSelectItem(item);
  };
  const closeDescription = heading => {
    setShowDescription(false);
  };

  return (
    <Layout>
      <Grid columns={2} style={{ marginTop: "100px" }}>
        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={5}>
            {serviceSubCategories.map(item => {
              return <PerItem getItemId={getItemId} product={item} />;
            })}
          </Grid.Column>
          <Grid.Column width={8}>
            {showDescription && (
              <ProductDescription
                closeDescription={closeDescription}
                selectItem={selectItem}
              />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <>
        <Button onClick={() => setFirstOpen(true)}>Open first Modal</Button>

        <Modal
          onClose={() => setFirstOpen(false)}
          onOpen={() => setFirstOpen(true)}
          open={firstOpen}
        >
          <Modal.Header>Modal #1</Modal.Header>
          <Modal.Content image>
            <div className="image">
              <Icon name="right arrow" />
            </div>
            <Modal.Description>
              <p>We have more to share with you. Follow us along to modal 2</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setSecondOpen(true)} primary>
              Proceed <Icon name="right chevron" />
            </Button>
          </Modal.Actions>

          <Modal
            onClose={() => setSecondOpen(false)}
            open={secondOpen}
            size="small"
          >
            <Modal.Header>Modal #2</Modal.Header>
            <Modal.Content>
              <p>That's everything!</p>
            </Modal.Content>
            <Modal.Actions>
              <Button
                icon="check"
                content="All Done"
                onClick={() => setSecondOpen(false)}
              />
            </Modal.Actions>
          </Modal>
        </Modal>
      </>
    </Layout>
  );
}

export default SubCategory;
