import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const addToCart = (id, price, name, image) => (dispatch) => {
	dispatch({
		type: ADD_TO_CART,
		payload: { id, price, image, name },
	});
};

export const removeFromCart = (id) => (dispatch) => {
	dispatch({
		type: REMOVE_FROM_CART,
		payload: id,
	});
};
