import axios from 'axios';
import {
	FETCH_PRODUCTS_FAILURE,
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCT_DETAILS_SUCCESS,
	FETCH_PRODUCTS_DETAILS_REQUEST,
} from './types';

export const fetchProductsRequest = () => (dispatch) => {
	dispatch({
		type: FETCH_PRODUCTS_REQUEST,
	});
};

export const fetchProductsDetailsRequest = () => (dispatch) => {
	dispatch({
		type: FETCH_PRODUCTS_DETAILS_REQUEST,
	});
};

export const fetchProductsSuccess = (products) => (dispatch) => {
	dispatch({
		type: FETCH_PRODUCTS_SUCCESS,
		payload: products,
	});
};

export const fetchProductDetailsSuccess = (product) => (dispatch) => {
	dispatch({
		type: FETCH_PRODUCT_DETAILS_SUCCESS,
		payload: product,
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
		dispatch(fetchProductsRequest());
		try {
			const results = await axios.get('https://e-commerce-flea-market.herokuapp.com/api/products');
			const products = await results.data;
			dispatch(fetchProductsSuccess(products));
		} catch (error) {
			const errorMsg = error.msg;
			dispatch(fetchProductsFailure(errorMsg));
		}
	};
};

export const fetchProductsSearch = (text) => {
	return async (dispatch) => {
		dispatch(fetchProductsRequest());
		try {
			const results = await axios.get(`https://e-commerce-flea-market.herokuapp.com/api/products/s/${text}`);
			const products = await results.data;
			dispatch(fetchProductsSuccess(products));
		} catch (error) {
			const errorMsg = error.msg;
			dispatch(fetchProductsFailure(errorMsg));
		}
	};
};
export const fetchProductsCategory = (category) => {
	return async (dispatch) => {
		dispatch(fetchProductsRequest());
		try {
			const results = await axios.get(`https://e-commerce-flea-market.herokuapp.com/api/products/${category}`);
			const products = await results.data;
			dispatch(fetchProductsSuccess(products));
		} catch (error) {
			const errorMsg = error.msg;
			dispatch(fetchProductsFailure(errorMsg));
		}
	};
};
export const fetchSelectedProduct = (id) => {
	return async (dispatch) => {
		dispatch(fetchProductsDetailsRequest());
		try {
			const results = await axios.get(`https://e-commerce-flea-market.herokuapp.com/api/products/product/${id}`);
			const product = await results.data;
			dispatch(fetchProductDetailsSuccess(product));
		} catch (error) {
			const errorMsg = error.msg;
			dispatch(fetchProductsFailure(errorMsg));
		}
	};
};
