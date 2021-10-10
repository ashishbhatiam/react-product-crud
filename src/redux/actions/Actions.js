import axios from "axios";
import Api from "../../constants/Api";

export const getProducts = (products) => {
  products = products ? products : [];
  return {
    type: "GET_PRODUCTS",
    payload: products,
  };
};


export const getProductById = (id) => {
  return dispatch =>
  dispatch({
    type: "GET_PRODUCTBYID",
    payload: axios.get(`${Api.get.productById}/${id}`)
    .then(response => {
      dispatch(getProductById(response.data));
      return response.data;
    })
  }).catch(e => {});
  
};


export const deleteProduct = id => {
  return dispatch =>
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: axios
        .delete(`${Api.delete.deleteProductById}/${id}`)
        .then(response => {
          return response.data;
        }),
    }).catch(e => {});
};


export const updateProduct = product => {
  return dispatch =>
    dispatch({
      type: 'UPDATE_PRODUCT',
      payload: axios
        .put(`${Api.put.updateProduct}/${product.id}`,{
          title: product.title,
          price: product.price,
          description: product.description,
          image:product.image,
          category: product.category
        })
        .then(response => {
          return response.data
        }),
    }).catch(e => {});
};


export const addProduct = payload => {
  return dispatch =>
    dispatch({
      type: 'ADD_PRODUCT',
      payload: axios
        .post(Api.post.addProduct,{
          title: payload.title,
          price: payload.price,
          description: payload.description,
          image:payload.image,
          category: payload.category
        })
        .then(response => {
          return response.data
        }),
    }).catch(e => {});
};

export const changeUsersLoading = () => {
  return dispatch =>
    dispatch({
      type: 'USERS_LOADING',
      usersLoading: true
    })
};