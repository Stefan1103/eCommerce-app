import axios from 'axios';
import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from './types';

export const fetchProductsRequest = () => (dispatch) => {
	dispatch({
		type: FETCH_PRODUCTS_REQUEST,
	});
};

export const fetchProductsSuccess = (products) => (dispatch) => {
	dispatch({
		type: FETCH_PRODUCTS_SUCCESS,
		payload: products,
	});
};

export const fetchProductsFailure = (error) => (dispatch) => {
	dispatch({
		type: FETCH_PRODUCTS_FAILURE,
		payload: error,
	});
};

export const fetchProducts = () => {
	return async (dispatch) => {
		dispatch(fetchProductsRequest);
		try {
			const results = await axios.get('/api/products');
			const products = results.data;
			console.log('PRODUCTS', products);
			dispatch(fetchProductsSuccess(products));
		} catch (error) {
			const errorMsg = error.msg;
			dispatch(fetchProductsFailure(errorMsg));
		}
	};
};
