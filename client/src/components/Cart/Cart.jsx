import React from 'react';
import shopingCart from '../../assets/shopping-cart.png';

const Cart = () => {
	console.log('SLIKA U KART', shopingCart);
	return (
		<div className="container">
			<div className="wrapper-cart row">
				<div className="img-container-cart col-4">
					<img className="img-fluid" src={shopingCart} />
				</div>
				<div className="cart-items col-8">
					<h1>Your Cart</h1>
				</div>
			</div>
		</div>
	);
};

export default Cart;
