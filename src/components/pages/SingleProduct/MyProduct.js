import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProductById } from "../../../redux/actions/Actions";
import MyLoader from "../sections/MyLoader";
import MyCard from "../sections/MyCard";
import { Grid } from "semantic-ui-react";
import CustomDivider from "../sections/CustomDivider";
import BigCard from "../sections/BigCard";
import CustomButton from "../sections/CustomButton";
export default connect(
  (store) => {
    return {
      productById: store.productsReducer,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {
        getProductById: getProductById,
      },
      dispatch
    );
  }
)(
  class MyProduct extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentWillMount() {
      this.props.getProductById(this.props.match.params.id);
    }

    render(match) {
      const { productById } = this.props.productById;
      return (
        <div>
          {this.props.productById.usersLoading === false ? 
          <div>
            <CustomDivider name="Product Details" centered />
          <Grid container style={{ padding: "5em 0em" }} vertical>
            <BigCard
              imageURL={productById.image}
              title={productById.title}
              description={productById.description}
              price={productById.price}
              category={productById.category}
              rating={productById.rating}
            />
            <CustomButton name="More Thrive"  url={`/product/${productById.id}`} />
          </Grid>
          </div>
           : <MyLoader />}
        </div>
      );
    }
  }
);
