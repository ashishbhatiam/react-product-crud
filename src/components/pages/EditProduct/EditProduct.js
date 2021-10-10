import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProductById, updateProduct, addProduct } from "../../../redux/actions/Actions";
import axios from "axios";
import Api from "../../../constants/Api";
import MyLoader from "../sections/MyLoader";

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
        updateProduct: updateProduct,
        addProduct: addProduct
      },
      dispatch
    );
  }
)(
  class EditProduct extends Component {
    constructor(props) {
      super(props);
      this.state = {
        product: {
          id: '',
          title: "",
          price: '',
          category: "",
          description: "",
          image: "",
        },
        usersLoading : false,
      };
    }

    componentWillMount() {
      if(this.props.match.params.id !='add'){
        this.setProductById(this.props.match.params.id);
      }
    }

    setProductById(id) {
      this.setState({ usersLoading : true })
      axios.get(`${Api.get.productById}/${id}`).then((response) => {
      this.setState({ usersLoading : false })
        const data = response.data;
        this.setState({
          product: {
            id: data.id,
            title: data.title,
            price: data.price,
            category: data.category,
            description: data.description,
            image: data.image,
          },
        });
      });
    }

    handleChange(e) {
      const target = e.target;
      let value = target.value;
      const name = target.name;
      if (target.name == "title") {
        this.setState(prevState => ({
          product: {
            ...prevState.product,
            title: value,
          }
        }));
      } else if (target.name == "price") {
        this.setState(prevState => ({
          product: {
            ...prevState.product, price: value } }));
      } else if (target.name == "category") {
        this.setState(prevState => ({
          product: {
            ...prevState.product, category: value } }));
      } else if (target.name == "description") {
        this.setState(prevState => ({
          product: {
            ...prevState.product, description: value } }));
      }
    }

    render(match) {

      const { productById } = this.props.productById;
      return (
        <div>
          { this.props.usersLoading ? 
            <MyLoader />
        : 
            (this.state.usersLoading ? <MyLoader /> : <div style={{ maxWidth: 780, marginTop: 50 }} className="container">
              <Form>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Title"
                    placeholder="Enter Title"
                    name="title"
                    value={this.state.product.title}
                    onChange={this.handleChange.bind(this)}
                    onBlur={this.handleBlur}
                  />
                  <Form.Input
                    fluid
                    label="Price"
                    type="number"
                    placeholder="Enter Price"
                    name="price"
                    value={this.state.product.price}
                    onChange={this.handleChange.bind(this)}
                    onBlur={this.handleBlur}
                  />
                  <Form.Input
                    fluid
                    label="Category"
                    type="text"
                    placeholder="Enter Category"
                    name="category"
                    value={this.state.product.category}
                    onChange={this.handleChange.bind(this)}
                    onBlur={this.handleBlur}
                  />
                </Form.Group>
                <Form.TextArea
                  label="Description"
                  placeholder="Enter Description..."
                  name="description"
                  value={this.state.product.description}
                  onChange={this.handleChange.bind(this)}
                  onBlur={this.handleBlur}
                />
                <Form.Group className="d-flex justify-content-between">
                  <Form.Button onClick={() => {
                    this.props.history.goBack() 
                  }}>Cancel</Form.Button>
                  <Form.Button
                    type="submit"
                    onClick={() =>{
                      if(this.props.match.params.id !='add'){
                      this.props.updateProduct(this.state.product)
                     }
                      else{
                        this.state.product.image ='https://source.unsplash.com/random';
                        this.props.addProduct(this.state.product)
                      }
                      setTimeout(() => {
                        this.props.history.push('/products')
                      }, 2000);}
                    }
                  >
                    Submit
                  </Form.Button>
                </Form.Group>
              </Form>
            </div>)
          }
        </div>
      );
    }
  }
);
