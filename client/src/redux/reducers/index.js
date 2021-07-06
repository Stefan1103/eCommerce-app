import { combineReducers } from 'redux';
import alert from './alert';
import products from './products';
import categories from './categories';

export default combineReducers({ alert, products, categories });
