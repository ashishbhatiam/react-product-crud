const initialState = {
  products: [],
  usersLoading: true,
  productById: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS":
      return { ...state, usersLoading: true };
    case "GET_PRODUCTS_PENDING":
      return { ...state, usersLoading: true };
    case "GET_PRODUCTS_FULFILLED":
      return { ...state, products: payload, usersLoading: false };
    case "GET_PRODUCTS_REJECTED":
      return { ...state, usersLoading: false };
    case "GET_PRODUCTBYID_PENDING":
      return { ...state, usersLoading: true };
    case "GET_PRODUCTBYID_FULFILLED":
      return { ...state, productById: payload, usersLoading: false };
    case "GET_PRODUCTBYID_REJECTED":
      return { ...state, usersLoading: false };
    case "DELETE_PRODUCT_PENDING":
      return { ...state, usersLoading: true };
    case "DELETE_PRODUCT_FULFILLED":
      return {
        ...state,
        products: state.products.filter((product) => product.id != payload.id),
        usersLoading: false,
      };
    case "UPDATE_PRODUCT_PENDING":
      return { ...state, usersLoading: true };
    case "UPDATE_PRODUCT_FULFILLED":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id == payload.id ? payload : product
        ),
        usersLoading: false,
      };
    case "UPDATE_PRODUCT_REJECTED":
      return { ...state, usersLoading: false };
    case "ADD_PRODUCT_PENDING":
      return { ...state, usersLoading: true };
    case "ADD_PRODUCT_FULFILLED":
      return {
        ...state,
        products: Object.assign(state.products, { [payload.id]: payload }),
        usersLoading: false,
      };
    case "ADD_PRODUCT_REJECTED":
      return { ...state, usersLoading: false };
    case "USERS_LOADING":
      return { ...state, usersLoading: true };
    default:
      return { ...state };
  }
};

export default productReducer;
