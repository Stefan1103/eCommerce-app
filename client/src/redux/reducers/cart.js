import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ONE_FROM_CART, EMPTY_CART, SET_TOTAL } from '../actions/types';

const initialState = {
	cartItems: [],
	total: 0,
};

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
			return { ...state, cartItems: [ ...state.cartItems, payload ] };
		case REMOVE_FROM_CART:
			let filteredProducts = state.cartItems.filter((item) => item.id !== payload);
			return { ...state, cartItems: filteredProducts };
		case REMOVE_ONE_FROM_CART:
			let newArr = { ...state };
			const num = findLastIndx(newArr.cartItems, payload);
			newArr.cartItems.splice(num, num >= 0 ? 1 : 0);
			return newArr;
		case EMPTY_CART:
			return { ...state, cartItems: [] };
		case SET_TOTAL:
			return { ...state, total: payload };
		default:
			return state;
	}
};
export default cart;
