import axios from 'axios/index';
import { Observable } from 'rxjs/Rx';
import Api from '../../constants/Api';

export const GET_PRODUCTS = 'main/GET_PRODUCTS';
export const GET_PRODUCTS_REJECTED = 'main/GET_PRODUCTS_REJECTED';
export const GET_PRODUCTS_FULFILLED = 'main/GET_PRODUCTS_FULFILLED';

 const productsCall = () => 
  Observable.fromPromise(
    axios.get(
      Api.get.products
    ).then(response => {
      return response
    })
    .catch(error => {
      
    })
  );

 const productsEpic = (action$, store) =>
action$
  .ofType("GET_PRODUCTS")
  .mergeMap(action =>
    productsCall(action)
      .map(response => ({
        type: "GET_PRODUCTS_FULFILLED",
        payload: response.data,
      }))
      .catch(error =>
        Observable.of({
          type: "GET_PRODUCTS_REJECTED",
          payload: error,
          error: true,
        }),
      ),
  );

export default productsEpic;  


