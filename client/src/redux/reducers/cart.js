import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = [];

const cart = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD_TO_CART:
			return [ ...state, payload ];
		case REMOVE_FROM_CART:
			let filteredProducts = state.cartProducts.filter((item) => item.id !== payload);
			return filteredProducts;
		default:
			return state;
	}
};
export default cart;
