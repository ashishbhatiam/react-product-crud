import React, { Component, Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import ProductsSection from "./components/pages/products/ProductsSection";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts, deleteProduct } from "./redux/actions/Actions";
import MyLoader from "./components/pages/sections/MyLoader";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import MyProduct from "./components/pages/SingleProduct/MyProduct";
import EditProduct from "./components/pages/EditProduct/EditProduct";
import TopNav from "./components/pages/products/TopNav";
const history = createBrowserHistory("localhost");

export default connect(
  (store) => {
    return {
      products: store.productsReducer,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {
        getProducts: getProducts,
      },
      dispatch
    );
  }
)(
  class App extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      this.props.getProducts();
    }
    render() {
      const { products, usersLoading } = this.props.products;
      return (
        <Router history={history}>
          <Switch>
            <Route render={(props) =>(<div>
             { <TopNav />}
            {
              <Switch>
                <Route
                  path="/product/:id"
                  exact
                  render={(props) => (
                    <EditProduct {...props} usersLoading={usersLoading} />
                  )}
                />
                <Route path="/products/:id" component={MyProduct} />
                <Route
                  render={(props) => (
                    <div>
                      {(usersLoading && products.length === 0) ||
                      usersLoading ? (
                        <MyLoader />
                      ) : (
                        products.length && (
                          <ProductsSection products={this.props.products} />
                        )
                      )}
                    </div>
                  )}
                />
              </Switch>
            }
            </div>) } />
          </Switch>
        </Router>
      );
    }
  }
);
