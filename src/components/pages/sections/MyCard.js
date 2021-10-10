import React, { Component } from "react";
import { Link, Router } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { deleteProduct, changeUsersLoading } from "../../../redux/actions/Actions";
import CustomModal from "./CustomModal";
export default connect(
  (store) => {
    return {};
  },
  (dispatch) => {
    return bindActionCreators(
      {
        deleteProduct: deleteProduct,
        changeUsersLoading: changeUsersLoading
      },
      dispatch
    );
  }
)(
  class MyCard extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { title, price, description, image, category, id } =
        this.props.product;
      return (
        <Card style={stylingCard}>
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>${price}</Card.Meta>
            <Card.Description>{description}</Card.Description>
          </Card.Content>
          <Card.Content
            extra
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Link to={`/products/${id}`} onClick={() =>{this.props.changeUsersLoading()}}>
              <Icon name="product hunt" />
              {"See More"}
            </Link>
            <Link to={`/product/${id}`}>
              <Icon name="edit" />
              {"Edit Card"}
            </Link>
          </Card.Content>
          {
            <CustomModal
              image={image}
              title={title}
              description={description}
              price={price}
              category={category}
              deleteProduct={this.props.deleteProduct}
              id={id}
            />
          }
        </Card>
      );
    }
  }
);

let stylingCard = {
  display: "flex",
  justifyContent: "space-between",
  margin: "20px 30px",
};

