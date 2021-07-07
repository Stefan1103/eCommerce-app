import {
	FETCH_PRODUCTS_FAILURE,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCT_DETAILS_SUCCESS,
	FETCH_PRODUCTS_DETAILS_REQUEST,
} from '../actions/types';

const initialState = {
	loading: false,
	loadingDetails: false,
	products: [],
	selectedProduct: {},
	error: '',
};

const products = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_PRODUCTS_REQUEST:
			return { ...state, loading: true };
		case FETCH_PRODUCTS_DETAILS_REQUEST:
			return { ...state, loadingDetails: true };
		case FETCH_PRODUCTS_SUCCESS:
			return { ...state, loading: false, error: '', products: payload };
		case FETCH_PRODUCT_DETAILS_SUCCESS:
			return { ...state, loadingDetails: false, error: '', selectedProduct: payload };
		case FETCH_PRODUCTS_FAILURE:
			return { ...state, loading: false, error: payload, products: [] };
		default:
			return state;
	}
};

export default products;
