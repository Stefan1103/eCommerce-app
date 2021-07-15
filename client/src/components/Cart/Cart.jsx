//react
import { useState, useEffect } from 'react';

//assets
import shopingCart from '../../assets/shopping-cart.png';

//redux
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { addToCart, removeFromCart, removeOneFromCart } from '../../redux/actions/cart';

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart);
	const [ numItems, setNumItems ] = useState([]);

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

	useEffect(
		() => {
			setNumItems(
				cartItems.map((item) => {
					const { id, price } = item;
					return { id, price };
				}),
			);
		},
		[ cartItems ],
		[],
	);

	console.log('numitems', numItems);
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
						const filteredItems = numItems.filter((item) => item.id === id);
						console.log(filteredItems);

						const removeHandle = () => {
							dispatch(removeOneFromCart(id));
							filteredItems.shift();
							setNumItems(filteredItems);
						};
						let qty = filteredItems.length;
						console.log(qty);
						const addHandle = () => {
							dispatch(addToCart(id, price, name, image));
						};

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
											<button onClick={addHandle}>add</button>
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
