import React from "react";
import {
  Segment,
  Card
} from "semantic-ui-react";

import MyCard from "../sections/MyCard";
const ProductsSection = (props) => {

  return (
    <div>
      <Segment attached="bottom">
      <Card.Group style={stylingCard}>
        {props.products.products.map((val, i) => (
          <MyCard product={val} key={i} />
        ))}
        </Card.Group>
      </Segment>
    </div>
  );
};

let stylingCard = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px 30px'
}

export default ProductsSection;
