import {combineReducers} from 'redux';
import productReducer from './productReducer';

const reducer = combineReducers({
    productsReducer: productReducer
  });
  
  
export default reducer;