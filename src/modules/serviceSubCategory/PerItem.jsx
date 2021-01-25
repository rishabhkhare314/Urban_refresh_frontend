import React from "react";
import { Card, Image, Divider, Icon, Button } from "semantic-ui-react";
import ItemImage from "./../../assets/images/category_15b5b4c0.jpeg";
import style from "./style.module.css"
const PerItem = ({ getItemId, product }) => {
  return (
    <Card centered style={{ width: "500px" }} key={product.id}>
      <Card.Content style={{ padding: "20px" }}>
        <Image
          floated="left"
          size="mini"
          src={ItemImage}
          className={style.ItemImage}
        />
        <div style={{ marginLeft: "100px" }}>
          <Card.Header>{product.name}</Card.Header>
          <Card.Description>
            <strong>&#8377; {product.price}</strong>
          </Card.Description>

          <Button primary>Add to Cart</Button>
        </div>
        <Divider />
        <Card.Meta>{product.description}</Card.Meta>
        <Card.Description
          onClick={() => getItemId(product)}
          className={style.viewAll}
        >
          View Details <Icon name="angle right" />
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default PerItem;
