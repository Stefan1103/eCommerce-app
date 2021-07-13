//react
import { useState } from 'react';

//assets
import shopingCart from '../../assets/shopping-cart.png';

//redux
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

const Cart = () => {
	const cartItems = useSelector((state) => state.cart);

	const distinct = [];
	const map = new Map();
	for (const item of cartItems) {
		if (!map.has(item.id)) {
			map.set(item.id, true);
			distinct.push({
				id: item.id,
				name: item.name,
				price: item.price,
				image: item.image,
			});
		}
	}
	console.log(distinct);
	console.log('unique niza', distinct);
	return (
		<div className="container">
			<div className="wrapper-cart row">
				<div className="img-container-cart col-4">
					<img className="img-fluid" src={shopingCart} />
				</div>
				<div className="cart-items col-8">
					<h1>Your Cart</h1>
					{distinct.map((item) => {
						const { id, image, name, price } = item;

						const numItems = cartItems.filter((cartItem) => cartItem.id === id);
						// probaj so stejt so removeov mozgaj go so if za vo reducer na 0 etc
						const removeHandle = () => {
							numItems.pop();
						};
						let qty = numItems.length;
						console.log(qty);

						return (
							<ul>
								<li>
									<div className="cart-items-container">
										<div className="cart-item-specs col-7">
											<div className="cart-item-img">
												<img className="img-fluid img-thumbnail" src={image} />
											</div>
											<div className="cart-item-details">
												<h3>name: {name}</h3>
												<h2>price: {price}</h2>
											</div>
										</div>
										<div className="cart-item-btn-container col-5">
											<button onClick={removeHandle}>remove</button>
											<button>add</button>
											<textbox>{qty}</textbox>
										</div>
									</div>
								</li>
							</ul>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Cart;
