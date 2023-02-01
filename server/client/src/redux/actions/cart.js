import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ONE_FROM_CART, EMPTY_CART, SET_TOTAL } from './types';

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
export const removeOneFromCart = (id) => (dispatch) => {
	dispatch({
		type: REMOVE_ONE_FROM_CART,
		payload: id,
	});
};
export const emptyCart = () => (dispatch) => {
	dispatch({
		type: EMPTY_CART,
	});
};
export const setTotal = (total) => (dispatch) => {
	dispatch({
		type: SET_TOTAL,
		payload: total,
	});
};
