import axios from 'axios';
import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST } from './types.js';

export const fetchCategoriesRequest = () => (dispatch) => {
	dispatch({
		type: FETCH_CATEGORIES_REQUEST,
	});
};

export const fetchCategoriesSuccess = (categories) => (dispatch) => {
	dispatch({
		type: FETCH_CATEGORIES_SUCCESS,
		payload: categories,
	});
};

export const fetchCategoriesFailure = (error) => (dispatch) => {
	dispatch({
		type: FETCH_CATEGORIES_FAILURE,
		payload: error,
	});
};

export const fetchCategories = () => async (dispatch) => {
	dispatch(fetchCategoriesRequest());
	try {
		const response = await axios.get('/api/categories');
		const categories = await response.data;
		dispatch(fetchCategoriesSuccess(categories));
	} catch (error) {
		const errorMsg = error.message;
		dispatch(fetchCategoriesFailure(errorMsg));
	}
};
