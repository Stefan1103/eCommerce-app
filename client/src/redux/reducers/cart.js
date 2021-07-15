import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ONE_FROM_CART } from '../actions/types';

const initialState = [];

const cart = (state = initialState, action) => {
	const { type, payload } = action;

	const findLastIndx = (array, id) => {
		for (let i = array.length - 1; i >= 0; i--) {
			if (array[i].id === id) {
				return i;
			}
		}
		return -1;
	};

	switch (type) {
		case ADD_TO_CART:
			return [ ...state, payload ];
		case REMOVE_FROM_CART:
			let filteredProducts = state.filter((item) => item.id !== payload);
			return filteredProducts;
		case REMOVE_ONE_FROM_CART:
			let newArr = [ ...state ];
			const num = findLastIndx(newArr, payload);
			newArr.splice(num, num >= 0 ? 1 : 0);
			return newArr;
		default:
			return state;
	}
};
export default cart;
