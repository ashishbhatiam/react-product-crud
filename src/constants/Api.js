const apiurl = 'https://fakestoreapi.com';


export default {
    get: {
      products: `${apiurl}/products`,
      productById: `${apiurl}/products`
    },
    delete: {
      deleteProductById: `${apiurl}/products`
    },
    put: {
      updateProduct: `${apiurl}/products`
    },
    post: {
      addProduct: `${apiurl}/products`
    }
  };
  