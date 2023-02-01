import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from '../actions/types';

const initialState = {
	loading: false,
	categories: [],
	error: '',
};

const categories = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case FETCH_CATEGORIES_REQUEST:
			return { ...state, loading: true };
		case FETCH_CATEGORIES_SUCCESS:
			return { ...state, categories: payload, loading: false, error: '' };
		case FETCH_CATEGORIES_FAILURE:
			return { ...state, error: payload, loading: false, categories: [] };
		default:
			return state;
	}
};
export default categories;
